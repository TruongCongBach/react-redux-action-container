class ChangerValueFirstKey {

    static get dependencies() {
        return [];
    }

    async run(action) {
        return await new Promise((resolve, reject) => {
            resolve(action.valueNewOfFirstKey);
        } );

    }
}


export {
    ChangerValueFirstKey
}
