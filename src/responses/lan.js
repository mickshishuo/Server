"use strict";

function nullResponse(url, info, sessionID) {
    return '{"err":0, "errmsg":null, "data":null}';
}

function serverAvailable(url, info, sessionID) {
    if (gameplayConfig.lan.enabled) {
        return json.stringify({"err": 0, "errmsg": null, "data": true});
    } else {
        return json.stringify({"err": 0, "errmsg": null, "data": false});
    }
}

function joinMatch(url, info, sessionID) {
    let account = account_f.accountServer.find(sessionID);
    let profileID = "";
    let matchID = "";

    // check if the player is a scav
    if (info.savage == true) {
        matchID = "3XR5";
        profileID = "scav" + account.id;
    } else {
        matchID = "3SRC";
        profileID = "pmc" + account.id;
    }

    return json.stringify({"err": 0, "errmsg": null, "data":[{"profileid": profileID, "status": "busy", "ip": "127.0.0.1", "port": 25565, "location": info.location, "sid": "", "gamemode": "deathmatch", "shortid": matchID}]});
}

function getGroupStatus(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg": null, "data": {"players": [], "invite": [], "group": []}});
}

router.addStaticRoute("/client/match/available", serverAvailable);
router.addStaticRoute("/client/match/join", joinMatch);
router.addStaticRoute("/client/match/group/status", getGroupStatus)
router.addStaticRoute("/client/match/group/looking/stop", nullResponse);
router.addStaticRoute("/client/match/group/exit_from_menu", nullResponse);
router.addStaticRoute("/client/match/exit", nullResponse);
router.addStaticRoute("/client/match/updatePing", nullResponse);
