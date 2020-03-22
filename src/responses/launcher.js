/* launcher.js
 * contains responses for launcher requests
 * dependencies: EmuTarkov-Launcher
 */

"use strict";

function connect() {
    return json.stringify({"err": 0, "errmsg": null, "data": {"backendUrl": server.getBackendUrl(), "name": server.getName(), "editions": Object.keys(db.profile)}});
}

function login(url, info, sessionID) {
    let output = account_f.accountServer.login(info);

    if (output === "") {
        return json.stringify({"err": 1, "errmsg": "Wrong email and/or password combination", "data": null});
    }

    return json.stringify({"err": 0, "errmsg": null, "data": output});
}

function register(url, info, sessionID) {
    let output = account_f.accountServer.register(info);

    if (output === "") {
        return json.stringify({"err": 1, "errmsg": "Account already exists", "data": null});
    }

    return json.stringify({"err": 0, "errmsg": null, "data": "OK"});
}

function remove(url, info, sessionID) {
    let output = account_f.accountServer.remove(info);

    if (output === "") {
        return json.stringify({"err": 1, "errmsg": "Wrong email and/or password combination", "data": null});
    }

    return json.stringify({"err": 0, "errmsg": null, "data": "OK"});
}

function get(url, info, sessionID) {
    let accountId = account_f.accountServer.login(info);
    let output = account_f.accountServer.find(accountId);

    if (output === "") {
        return json.stringify({"err": 1, "errmsg": "Wrong email and/or password combination", "data": null});
    }

    return json.stringify({"err": 0, "errmsg": null, "data": json.stringify(output)});
}

function changeEmail(url, info, sessionID) {
    let output = account_f.accountServer.changeEmail(info);
    
    if (output === "") {
        return json.stringify({"err": 1, "errmsg": "Wrong email and/or password combination", "data": null});
    }

    return json.stringify({"err": 0, "errmsg": null, "data": "OK"});
}

function changePassword(url, info, sessionID) {
    let output = account_f.accountServer.changePassword(info);
    
    if (output === "") {
        return json.stringify({"err": 1, "errmsg": "Wrong email and/or password combination", "data": null});
    }

    return json.stringify({"err": 0, "errmsg": null, "data": "OK"});
}

function wipe(url, info, sessionID) {
    let output = account_f.accountServer.wipe(info);
    
    if (output === "") {
        return json.stringify({"err": 1, "errmsg": "Wrong email and/or password combination", "data": null});
    }

    return json.stringify({"err": 0, "errmsg": null, "data": "OK"});
}

router.addStaticRoute("/launcher/server/connect", connect);
router.addStaticRoute("/launcher/profile/login", login);
router.addStaticRoute("/launcher/profile/register", register);
router.addStaticRoute("/launcher/profile/remove", remove);
router.addStaticRoute("/launcher/profile/get", get);
router.addStaticRoute("/launcher/profile/change/email", changeEmail);
router.addStaticRoute("/launcher/profile/change/password", changePassword);
router.addStaticRoute("/launcher/profile/change/wipe", wipe);
