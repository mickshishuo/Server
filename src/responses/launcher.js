/* launcher.js
 * contains responses for launcher requests
 * dependencies: EmuTarkov-Launcher
 */

"use strict";

function connect() {
    return "OK";
}

function login(url, info, sessionID) {
    let output = account_f.accountServer.login(info);
    return output.toString();
}

function register(url, info, sessionID) {
    account_f.accountServer.register(info);
    return "OK";
}

function remove(url, info, sessionID) {
    let output = account_f.accountServer.remove(info);
    return (output === 0) ? "FAILED" : "OK";
}

function changeEmail(url, info, sessionID) {
    let output = account_f.accountServer.changeEmail(info);
    return (output === 0) ? "FAILED" : "OK";
}

function changePassword(url, info, sessionID) {
    let output = account_f.accountServer.changePassword(info);
    return (output === 0) ? "FAILED" : "OK";
}

router.addStaticRoute("/launcher/connect", connect);
router.addStaticRoute("/launcher/profile/login", login);
router.addStaticRoute("/launcher/profile/register", register);
router.addStaticRoute("/launcher/profile/remove", remove);
router.addStaticRoute("/launcher/profile/changeEmail", changeEmail);
router.addStaticRoute("/launcher/profile/changePassword", changePassword);