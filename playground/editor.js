require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], function () {

    // 初始化变量
    var htmlEditor;
    var jsEditor;
    var output;

    var defaultHTML = 
`<g-h-layout backgroundColor="rgb(248, 249, 255)" width="100%" height="100%" justifyContent="center" alignItems="center">
    <g-v-layout backgroundColor="#FFF" width="456px" height="661px" borderRadius="8px" padding="16px">
        <g-app-logo marginTop="24px"></g-app-logo>
        <g-app-name marginTop="20px"></g-app-name>
        <g-account-input marginTop="20px"></g-account-input>
        <g-password-input marginTop="20px"></g-password-input>
        <g-login-button marginTop="20px">登录</g-login-button>
    </g-v-layout>
</g-h-layout>
`
    const defaultJS = 
`import Guard from '../src/guard.js'
// 62345c87ffe7c884acbae53c
const guard = await Guard.initialize({appId: "60caaf41df670b771fd08937"});
console.log(guard);
`

    // 定义编辑器主题
    monaco.editor.defineTheme('myTheme', {
        base: 'vs',
        inherit: true,
        rules: [{ background: 'EDF9FA' }],
    });
    // monaco.editor.setTheme('myTheme');

    var htmlModel = monaco.editor.createModel(defaultHTML, 'html');
    htmlEditor = monaco.editor.create(document.getElementById('htmlEditor'), {
        model: htmlModel,
        minimap: { enabled: false },
    });

    var jsModel = monaco.editor.createModel(defaultJS, 'javascript');
    jsEditor = monaco.editor.create(document.getElementById('jsEditor'), {
        model: jsModel,
        minimap: { enabled: false },
    });

    // var outputModel = monaco.editor.createModel('', 'json');
    // const modelUri = monaco.Uri.parse("json://grid/settings.json");
    // const jsonModel = monaco.editor.createModel(JSON.stringify('', null, '\t'), "json", modelUri);
    // output = monaco.editor.create(document.getElementById('outputEditor'), {
    //     model: outputModel,
    //     minimap: { enabled: false },
    // });
    // window.output = output

    const guardContainer = document.querySelector('#guard');
    guardContainer.insertAdjacentHTML('afterbegin', htmlEditor.getValue());

    htmlEditor.getModel().onDidChangeContent(() => {
        while (guardContainer.firstChild) {
            guardContainer.removeChild(guardContainer.lastChild);
        }
        guardContainer.insertAdjacentHTML('afterbegin', htmlEditor.getValue());
    });

    var setInnerHTML = function (elm, html) {
        elm.innerHTML = html;
        Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes)
                .forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }

    var jsContainer = document.getElementById('djs')
    const replaceLog = `
        var originalLog = console.log;
        console.log = function(msg) {
            output.trigger('keyboard', 'type', {text: msg});
            output.trigger('anyString', 'editor.action.formatDocument')

            originalLog(msg)
        }
    `
    setInnerHTML(jsContainer, `<script type="module">
        ${jsEditor.getValue()}
        </script>
    `);
    jsEditor.getModel().onDidChangeContent(() => {
        const code = jsEditor.getValue();
        setInnerHTML(jsContainer, `<script type="module">
            ${code}
            </script>
        `);
    });
 
});