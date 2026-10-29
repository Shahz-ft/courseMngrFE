A. Project setup and routing
npm create vite@latest .
npm i @mui/material @emotion/react @emotion/styled
npm i axios react-icons react-router-dom react-toastify
remove evrything uncessry  and setup main.jsx(BR) app.jsx (Routes,Route), pages components,services

B. Backend 
npm init -y
npm install json-server@0.17.4
create db.json  => { "items" : [] } , npx json-server db.json

C.API services
BaseURL.js — Store the backend address => export const BASEURL = "http://localhost:3000";
AxiosConfig.js — Send API requests => import axios , const axiosConfig(met,url,data), export +toast
AllAPIs.js — Define course operations => imp BU,AXCnfg, export


D. DESIGN

E. logic build 
..add... 
usestate imp usenavigate addapi
create one state object containing all  field=> const [a,seta] = usste([{......}])
controlled inps - value ={a.} , onChange=((e)=>seta({...a,})) 
button onclick fun .. await addC(data); if responsestatus ==201 check => toast, navigate('/url')

...read..
imp usestate useeffect getapi
usestate object creation [data,setData], useefct(()=>{ getDATa()},[])
const getDta ..await getC() ; if 200 => setDta(rs.data)
map .. coursecard  pSs prop ({course}) => course.courseNm

...delete...
imp delteapi
ondeleteclick fun = async(id) ..await DElC(id) if res200 => toast succ getdta()..
key -eachData.id , onDelt = {ondeleticlick} pass prop ({course , onDelt}) => onclick={()=> ondelt(course.id)}

...edit...
import updteapi
create usestate [open, setOpen] = us(false), [selectedC,setSeleC] = us({}), 
const handleOpen =()=> setOpen(true) , const handleClose = ()=>setClose(false)
oneditclick fun =(course) set

