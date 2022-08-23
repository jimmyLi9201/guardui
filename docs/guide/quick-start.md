# Quick start

Although you can use any framework you like, in this tutorial, we will use plain html/css/javascript so that we can keep things as simple as possible.

So to get started, open your favorite code editor and create a folder to hold your files. Within that folder create index.html and we are good to go.

Let's build a custom login page and see how Guard UI works.

## Step 1: add dependency

```html
<script src="https://unpkg.com/guard-ui/lib/index.js"></script>
```

## Step 2: init

```javascript
const guard = new Guard({appId: 'your authing app id'})
```

## Step 3: add component

```html
<g-app-logo></g-app-logo>
<g-app-name></g-app-name>
<g-account-input></g-account-input>
<g-password-input></g-password-input>
<g-error-text></g-error-text>
<g-login-button></g-login-button>
```

## Step 4: handling result

```javascript
guard.on('login', (code, message, userInfo)=>{
    console.log(userInfo);
});
```

complete code:

```html
<html>
<head>
    <script src="https://unpkg.com/guard-ui/lib/index.js"></script>
</head>
<body>
    <g-app-logo></g-app-logo>
    <g-app-name marginTop="16px"></g-app-name>
    <g-account-input marginTop="16px"></g-account-input>
    <g-password-input marginTop="8px"></g-password-input>
    <g-error-text marginTop="8px"></g-error-text>
    <g-login-button marginTop="8px"></g-login-button>

    <script>
        const guard = new Guard({appId: '60caaf41df670b771fd08937'});
        guard.on('login', (code, message, userInfo) => {
            console.log(userInfo);
        });
    </script>
</body>
</html>
```

with code above, your browser should show:

<img src="./images/login_page.png" alt="drawing" width="300"/>

and voila, you have built a working login page.