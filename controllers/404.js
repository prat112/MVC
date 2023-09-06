exports.get404Page = (req,res)=>{
    res.status(400).render('404',{
      pageTitle:'Error 404',
    });
  }