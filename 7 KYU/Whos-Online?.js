const whosOnline = friends => {
    let obj = {};
    friends.forEach(friend => {
        if (friend.status === 'online' && friend.lastActivity <= 10) {
            if (!obj.online) obj.online = [];
            obj.online.push(friend.username);
        } else if (friend.status === 'online' && friend.lastActivity > 10) {
            if (!obj.away) obj.away = [];
            obj.away.push(friend.username);
        } else {
            if (!obj.offline) obj.offline = [];
            obj.offline.push(friend.username);
        }
    });
    return obj;
}
