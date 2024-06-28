import setup from "./setup"



setup("imageWebWatch").then(async ({app, db}) => {

  
  app.post("/echo", (req, res) => {
    res.send(req.body)
  })
})
