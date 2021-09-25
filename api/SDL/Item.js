const type = require('./Item.gql')

const resolver = {
    Query: {
        items: async (root, args, context) => {
            console.log('- items()')
            try {

                const items = []
                for(let i = 1; i<=10; i++) {
                    items.push({
                        id: i,
                        title: `square of ${i} equal ${i*i}`
                    })
                }

                return items                
            } catch (e) {
                console.log('- userProfile err ->', e && e.toString())
            }
        }
    }
}

module.exports = { type, resolver }