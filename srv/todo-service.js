const cds = require("@sap/cds");
const cdslib = require('@sap/cds/lib')
//const cov2ap = require("@sap/cds-odata-v2-adapter-proxy");

//cds.on("bootstrap", (app) => app.use(cov2ap()));

//

module.exports = class TodoService extends cdslib.ApplicationService { init(){
  this.before ('NEW','Users', genid)
  this.before ('NEW','TodoList', genid)
  return super.init()
}}

/** Generate primary keys for target entity in request */
async function genid (req) {
  const {ID} = await cds.tx(req).run (SELECT.one.from(req.target).columns('max(ID) as ID'))
  req.data.ID = ID  + 1
  req.data.status_id = 1;
  req.data.priority_id = 3;
  console.log(req.data)
}

//module.exports = cds.server;