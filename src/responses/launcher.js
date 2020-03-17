/* launcher.js
 * contains responses for launcher requests
 * dependencies: EmuTarkov-Launcher
 */

"use strict";

function connect() {
    return "OK";
}

function login(url, info, sessionID) {
    return account_f.accountServer.login(info);
}

function register(url, info, sessionID) {
    account_f.accountServer.register(info);
}

function remove(url, info, sessionID) {
    return account_f.accountServer.remove(info);
}

function changeEmail(url, info, sessionID) {
    return account_f.accountServer.changeEmail(info);
}

function changePassword(url, info, sessionID) {
    return account_f.accountServer.changePassword(info);
}

router.addStaticRoute("/launcher/connect", connect);
router.addStaticRoute("/launcher/profile/login", login);
router.addStaticRoute("/launcher/profile/register", register);
router.addStaticRoute("/launcher/profile/remove", remove);
router.addStaticRoute("/launcher/profile/changeEmail", changeEmail);
router.addStaticRoute("/launcher/profile/changePassword", changePassword);