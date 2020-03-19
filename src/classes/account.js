"use strict";

/**
* AccountServer class maintains list of accounts in memory. All account information should be 
* loaded during server init.
*/
class AccountServer {
    constructor() {
        this.accounts = {};
    }

    initialize() {
        this.accounts = json.parse(json.read(db.user.configs.accounts));
    }

    saveToDisk() {
        json.write(db.user.configs.accounts, this.accounts);
    }

    find(sessionID) {
        for (let accountId in this.accounts) {
            let account = this.accounts[accountId];

            if (account.id === sessionID) {
                return account;
            }
        }

        return undefined;
    }

    exists(info) {
        for (let accountId in this.accounts) {
            let account = this.accounts[accountId];

            if (info.email === account.email && info.password === account.password) {
				return account.id;
            }
        }

        return 0;
    }

    isWiped(sessionID) {
        return this.accounts[sessionID].wipe;
    }

    setWipe(sessionID, state) {
        this.accounts[sessionID].wipe = state;
    }

    register(info) {
        let sessionID = (Object.keys(this.accounts).length + 1);
        
	this.accounts[sessionID] = {
		"id": sessionID,
		"nickname": "",
		"email": info.email,
		"password": info.password,
		"wipe": true,
		"edition": info.edition
	}
		
        this.saveToDisk();
    }
    
    remove(info) {
        let accountId = this.exists(info.email, info.password);  

        if (accountId !== 0) {
            delete this.accounts[accountId];
            this.saveToDisk();
        }

        return accountId;
    }

    changeEmail(info) {
        let accountId = this.exists(info.email, info.password);  

        if (accountId !== 0) {
            this.accounts[sessionID].email = info.change;
            this.saveToDisk();
        }

        return accountId;
    }

    changePassword(info) {
        let accountId = this.exists(info.email, info.password);  

        if (accountId !== 0) {
            this.accounts[sessionID].password = info.change;
            this.saveToDisk();
        }

        return accountId;
    }

    wipe(info) {
        let accountId = this.exists(info.email, info.password);  

        if (accountId !== 0) {
            this.accounts[sessionID].edition = info.edition;
            this.setWipe(accountId, true);
            this.saveToDisk();
        }

        return accountId;
    }

    getReservedNickname(sessionID) {
        return this.accounts[sessionID].nickname;
    }
}

function getPath(sessionID) {
    return "user/profiles/" + sessionID + "/";
}

module.exports.accountServer = new AccountServer();
module.exports.getPath = getPath;
