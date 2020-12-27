import './App.css';
import react,{useState,useEffect} from 'react'
import { BrowserRouter as  Switch,Route,Link,Redirect } from "react-router-dom";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';




export default function MyResume() {

  const [display ,setdisplay]=useState(false);

  const [windowsidebar ,setwindowsidebar]=useState(false);

  const [disheader ,setdisheader]=useState(false);

  const [table ,settable]=useState(false);

useEffect(()=>
{
    if(window.innerWidth <= 760)
    {
    setdisplay(true)
    setwindowsidebar(true)
    setdisheader(true)
    settable(true)
    
    } 
    else
    {
    setdisplay(false)
    setwindowsidebar(false)
    setdisheader(false)
    settable(false)
   
    }
})
 

 window.addEventListener('resize',setdisplay);
 window.addEventListener('resize',setwindowsidebar);
 window.addEventListener('resize',setdisheader);
 window.addEventListener('resize',settable);
  
  return (
      
    <div className={display ? "mobile":"website"}>
      <div className="container-fluid">
      <div className={windowsidebar?"Side-bar-mobile":"Side-bar"}>
            <div className="Resume_Heading" style={{display:"flex"}}>
            <div style={{marginLeft:"7px"}}><CastForEducationIcon/></div> <p>MYRESUME</p>
            </div>

            <div className="img_pic">
              <img src="profilepic.jpg"></img>
            </div>

            
            
            <div className="Personal_details">
            
               <div className="Sub_details">
               <h6 style={{textDecorationLine:"underline"}}>Biodata</h6>
               <ul>
              
                   <div style={{width:"90%",height:"auto",padding:"0.5%"}}>
                       <li>NAME   : Arjuna N R</li>
                       <li>S/O    : Rajashekara N C,vasanthi</li>
                       <li>DOB    : 5-08-1996</li>
                       <li>AGE(c) : 24</li>
                       <li>ADDRESS:</li>
                       <ul>
                  <li>Niluvali,</li>
                  <li>Kendalbail(p),</li>
                  <li>Thirthahalli(T),</li>
                  <li>Shivamogga(D),</li>
                  <li>Karnataka(S),</li>
                  <li>India(c),</li>
                  <li>PinCode:577411.</li>
                </ul>
                   </div>
                 </ul>
              
               </div>
            

               <div className="Sub_details">
               <h6 style={{textDecorationLine:"underline"}}>About Me</h6>
                 <ul>
                 <p> My Name is Arjuna N R,My native is Niluvani which is preasent near Agumbe,shivamoga Karnataka
                  I am completed My graduation in MCA in JNNCE Shivamoga,and completed degree in Bsc at TungaMahavidyalaya
                  Thirthahalli</p>
                 </ul>
               </div>
               
               
               <div className="Sub_details" >
               <h6 style={{textDecorationLine:"underline"}}>Nationality AND Proof</h6>
                <ul>Nationality:India
                 Proof:
                   <li>AdarCard</li>
                   <li>voter Id</li>  
                   <li>PanCard</li>
                   </ul>
               
               
                  
               
               </div>
               <div className="Sub_details" >
               <h6 style={{textDecorationLine:"underline"}}>Language</h6>
                <ul>
                   <li>Kannada</li>
                   <li>English</li> 
                   </ul>
               
               
                  
               
               </div>
            </div>
            <div style={{marginTop:"1%",color:"white" ,paddingBottom:"0 1% 5% 1%",backgroundColor:"navy"}}>
            <p className="p1" style={{backgroundColor:"navy",padding:"0.5%"}}>  websitecreater:</p>
                      <p>Arjuna N R</p>
                      <a href="tel:9448427178"> <li  className="p1"><PhoneAndroidIcon/> 9448427178</li></a>
       
                       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arjun042896@gmail.com" target="_blank"> <li className="p1"><EmailOutlinedIcon/>arjun042896@gmail.com</li></a>
       
                      </div>
      </div> 
       
    <div className="mainbar-sub">
    
    <div className="my-clg-exy">
    
       <div className={disheader?"mobile-header":"header"}>
       
           <ul> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arjun042896@gmail.com" target="_blank"> <li className="p1"><EmailOutlinedIcon/>arjun042896@gmail.com</li></a></ul>
       <ul><a href="tel:9448427178"> <li  className="p1"><PhoneAndroidIcon/> 9448427178</li></a></ul>
       <ul><a href="https://www.facebook.com/arjuna.gowda.505" target="_blank"> <li  className="p1"><FacebookIcon/>arjuna.gowda.505</li></a></ul>
       <ul><a href="https://www.instagram.com/ar_jun_00000_gowda/" target="_blank"> <li  className="p1"><InstagramIcon/>ar_jun_00000_gowda</li></a></ul>
       
       </div>
    </div>
 
    <div className="my-clg-ex">
        <p className="p1" style={{width:"22%",backgroundColor:"navy",padding:"0.1%",marginTop:"1%"}}>EXPERIENCE</p>

        <div>
        <div style={{display:"flex",marginLeft:"1%"}}><p><h6>WorkingExperience</h6></p><p> : Fresher</p></div>
        <div style={{display:"flex",marginLeft:"1%"}}><p> <h6>Certificate </h6> </p> <p> : Core java</p></div>

       <div style={{display:"flex",marginLeft:"1%"}}> <p><h6>OtherExperience:</h6></p><p> 
           <div style={{width:"98%",height:"auto",padding:"2%",backgroundColor:"white",border:"2px solid lavender"}}> My name is Arjuna N R , I completed my post graduation in MCA at JJNNCE shivamogga,
            i am good in proraming language like java ,c#,sql,html,css,javascrept,node js,core php.I have core java certificate from jspider,
            i got selected to Quinnox and there completed three months training on html,css,javascript,React js,c#,T-Sql
            </div></p></div>
        </div>
    </div>
   
    <div className="my-clg-ex"><p className="p1" style={{width:"22%",backgroundColor:"navy",padding:"0.1%",marginTop:"1%"}}>EDUCATION</p>
    <table border="1" className={table?"table-mobile":"table-laptop"}>
        <tr style={{width:"10%",height:"auto",padding:"2px",backgroundColor:"lavender"}}>
            <th>Education</th>
            <th>Name Of The School/Collage</th>
            <th>Year</th>
            <th>Pecentage/cgpa</th>
        </tr>
        <tr>
            <td>SSLC</td>
            <td>Gov.Shcool Basavani</td>
            <td>2012</td>
            <td>79.54</td>
          
        </tr>
        <tr>
            <td>PUC</td>
            <td>Gov.Junior.College,Thirthahalli</td>
            <td>2014</td>
            <td>69.34</td>
          
        </tr>
        <tr>
            <td>BSc</td>
            <td>TungaMahavidyalaya</td>
            <td>2017</td>
            <td>65.34</td>
          
        </tr>
        <tr>
            <td>MCA</td>
            <td>JNNCE Shivamogga</td>
            <td>2020</td>
            <td>7.5 cgpa</td>
          
        </tr>
    </table>
    
    </div>
    
    <div className="my-clg-ex"><p className="p1"  style={{width:"25%",height:"auto",backgroundColor:"navy",padding:"0.1%",marginTop:"1%"}}>PROGRAMING LANGUAGE KNOWS</p>
    

    <table style={{width:"90%",borderCollapse:"collapse",marginTop:"5%",border:"2px solid lanvender"}}>
        <tr style={{marginTop:"5%",border:"1px solid lanvender"}}>
            <input type="text" value="HTML" />
            <input type="text" value="CSS" />
            <input type="text" value="JAVASCRIPT" />
            <input type="text" value="REACT JS" />
            <input type="text" value="C#" />
            <input type="text" value="JAVA" />
            <input type="text" value="T-SQL" />

        </tr>
    </table>
                  
                  
                </div>
 
    <div className="my-clg-exy">
     <p className="p1" style={{width:"15%",backgroundColor:"navy",padding:"0.1%",marginLeft:"1%",marginTop:"1%"}}>PROJECT</p>
     <div style={{display:"flex",marginLeft:"1%",textDecorationLine:"underline",textDecorationColor:"lavender"}}><p><h6>1.PERSONAL HEALTH REPORT(major project)</h6></p><p> : </p>
     </div> 
  <div style={{width:"90%",height:"auto",backgroundColor:"white",border:"2px solid lavender",marginLeft:"1%",padding:"1%"}}>
    <div style={{marginLeft:"35%"}}> <tr>  Technology : PHP , HTML , CSS , JAVASCRIPT   </tr>
     <tr>  Descreption : This is a software we can using this make a</tr>
     <tr>Appointment and doctor can send prescription to </tr>
     <tr> patient through this software.Same  like scanning report also </tr>
     </div>
    </div>   
     <p></p>
     <p></p>
     <div style={{display:"flex",marginLeft:"1%",textDecorationLine:"underline",textDecorationColor:"lavender",marginTop:"2%"}}><p><h6>2.RTO MANAGEMENT</h6></p><p> : </p>
     </div> 
 <div style={{width:"90%",height:"auto",backgroundColor:"white",border:"2px solid lavender",marginLeft:"2%"}}>
     <p>Technology : PHP , HTML , CSS , JAVASCRIPT(mini project)</p> 
     <p>Descreption : This is a software we can take online exam</p>       
        <p></p>
        </div>
     <div style={{display:"flex",marginLeft:"1%" ,textDecorationLine:"underline",textDecorationColor:"lavender",marginTop:"2%"}}><p><h6>3.PARKING LOT(mini project)</h6></p><p> : </p>
     </div> 
     <div style={{width:"90%",height:"auto",backgroundColor:"white",border:"2px solid lavender",marginLeft:"2%"}}>
     <p>Technology : PHP , HTML , CSS , JAVASCRIPT
     <p></p>
     Descreption : This is a software we can using this we alot one park for our car in perticular mall/bulding</p>       
     </div>
    </div>

    <div className="my-clg-exy">
     <p className="p1" style={{width:"15%",backgroundColor:"navy",padding:"0.1%",marginLeft:"1%",marginTop:"1%"}}>HOBIES</p>
     <table>
     <div style={{width:"100%",height:"auto",margin:"1px",backgroundColor:"white",border:"2px solid lavender",marginLeft:"5%",marginTop:"5%",padding:"1%"}}>  <tr><td>Reading Books, </td><td>Play and Watch Crecket,  </td><td>Listen Music</td></tr></div>
     </table>

    </div>  

    </div>
</div>
</div>

  );
}

