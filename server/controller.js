var inventory = []

module.exports = {
    
    create: (req, res) => {
        const db = req.app.get('db');
        const { name, price, imageurl } = req.body;

        db.create_product([req.params.id, req.query.desc])
        .then(() => res.status(200).send('all good'))
        .catch(() => res.status(500).send("couldn't updated"));
    },
    update:(req, res) => {
        const db = req.app.get('db');

        db.update_product([req.params.id, req.query.desc])
        .then(() => res.status(200).send('updated!'))
        .catch(() => res.status(500).send("couldn't updated"));
    },

    delete:(req, res) => {
        const db = req.app.get('db');
        const { params } = req;

        db.inventory([params.id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
        }
    }








