
   
import Card from "./Component/YoutubeCard";
import Logo from "./Component/logo";


function App() {
  return (
    <div>

      <div >

     <Logo/>
     <Card image={"https://www.ashokitech.com/uploads/course/1175827253_1711351853.jpg"}
           heading={"Javascript |Session-01|Props"}
           para={"960 views 1 day ago"}/>

<Card image={"https://i.ytimg.com/vi/icsxikOzfVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm7h6KHrTloxDzWsToCIXglm_o0w"}
           heading={"Javascript|Session-03|Devops"}
           para={"560 views 3 day ago"}/>


    <Card image={"https://www.ashokitech.com/uploads/course/1095234717_1712829201.jpg"}
           heading={"React |Session-01|Props"}
           para={"880 views 6 day ago"}/>

       <Card image={"https://i.ytimg.com/an_webp/-t8ebxZhOPw/mqdefault_6s.webp?du=3000&sqp=COCL87EG&rs=AOn4CLDZBS3i-h9Gkn25TPrrbEqmia6S5Q"}
           heading={"Html |Session-01|Tags"}
           para={"924 views 4 day ago"}/> 

           <Card image={"https://i.ytimg.com/vi/8w_MuEwqKNg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNvbQqvEwAsVPWccOq1vjpffnKTA"}
           heading={"Javascript |Session-01|Dom"}
           para={"768 views 2 Hours ago"}/> 

           <Card image={"https://i.ytimg.com/vi/pJ_lfvEQgIs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-MNDV6YrDtJJvFtccQjEZQmdr2w"}
           heading={"Linux |Session-03|Shell"}
           para={"567 views 3 day ago"}/> 

           <Card image={"https://i.ytimg.com/vi/RVXBKZDVC9w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCK72lgQHn499mzrRVZmGbDCRyZPg"}
           heading={"React |Session-03|Hooks"}
           para={"985 views 2 day ago"}/> 

           <Card image={"https://i.ytimg.com/an_webp/ZrV9PiJ_ryM/mqdefault_6s.webp?du=3000&sqp=CJSU87EG&rs=AOn4CLACgOStexKSr15bVx_rccDIEivgNw"}
           heading={"Docker |Session-04|Build"}
           para={"457 views 1 Hours ago"}/>           
     
      
      </div>
     
    </div>
  );
}

export default App;
