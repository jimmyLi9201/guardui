# Quick start

Although you can use any framework you like, in this tutorial, we will use plain html/css/javascript to keep things as simple as possible.

To get started, open your favorite code editor and create a folder to hold your files. Within that folder create index.html and we are good to go.

Let's build a custom login page and see how Guard UI works.

## Step 1: add dependency

```html
<script src="https://unpkg.com/guard-ui/lib/index.js"></script>
```

## Step 2: init

```javascript
const guard = await Guard.initialize({appId: 'your authing app id'})
```

## Step 3: add component

```html
<g-guard>
    <g-guard-container>
        <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
        <g-app-name marginBottom="20px"></g-app-name>
        <g-account-input marginBottom="20px" text=""></g-account-input>
        <g-password-input marginBottom="20px" text=""></g-password-input>
        <g-error-text marginTop="-15px" marginBottom="5px"></g-error-text>
        <g-login-button marginBottom="20px"></g-login-button>
    </g-guard-container>
</g-guard>
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
    <g-guard>
        <g-guard-container>
            <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
            <g-app-name marginBottom="20px"></g-app-name>
            <g-account-input marginBottom="20px" text=""></g-account-input>
            <g-password-input marginBottom="20px" text=""></g-password-input>
            <g-error-text marginTop="-15px" marginBottom="5px"></g-error-text>
            <g-login-button marginBottom="20px"></g-login-button>
        </g-guard-container>
    </g-guard>

    <script>
        const guard = await Guard.initialize({appId: '60caaf41df670b771fd08937'});
        guard.on('login', (code, message, userInfo) => {
            console.log(userInfo);
        });
    </script>
</body>
</html>
```

::: tip
Replace appId with your own Authing app ID
:::

with code above, your browser should show:

<img src="./images/login_page.png"/>

There you go, you have built a working login page.