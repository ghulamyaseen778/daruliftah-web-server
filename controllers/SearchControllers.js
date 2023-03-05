const searchController = {
    getSearchController: (req, res) => {

        console.log(req.query);
        let query = req.query.query
        const arr = ["category", "keyWord", "id", "title"]
        if (query != "") {
            for (let i = 0; i <= arr.length; i++) {
                const element = arr[i];
                if (query == element) {
                    if (req.query.accesss !== undefined) {
                        
                    }
                    else {
                        res.json({
                            data: "Data Not Found3"
                        })
                    }
                }
            }
        } else {
            res.json({
                data: "Data Not Found2"
            })
        }
    }
}

module.exports = { searchController }