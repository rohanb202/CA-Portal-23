import React,{ useState,useContext } from "react";
import LeaderBoardCSS from './LeaderBoard.module.css';
// import LeaderBoardCSS from './Lea'
// import './navbar.css'
import NavBar from "../navbar/navbar";
// import GOH from './img/GOH.jpg'
import CopyBtn from '../../svgs/Vector.svg';
import AuthContext from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import axios from "../../utils/axios";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useEffect } from "react";
const REACT_APP_BASE_BACKEND_URL =  process.env.REACT_APP_BASE_BACKEND_URL || "http://localhost:8000"

export default function LeaderBoard (){
    const {userInfo, authTokens} = useContext(AuthContext);
    const [refferals, setrefferals] = useState(null);
    const [leaderboard, setleaderboard] = useState(null);
    const axiosPrivate = useAxiosPrivate();
    // const [userInfo, setuserInfo] = useState({
    //     full_name:'peter',
    //     ca_id:4,
    //     college:'iitbhu',
    //     profile_picture:'www.google.com'
    // })
    useEffect(()=>{
        let response = axiosPrivate.get('/api/list_ca/')
        .then((res) => {
            console.log(res)
            setrefferals(res.data.referrals);
            console.log(refferals);
            setleaderboard(res.data.cas);
            console.log(leaderboard)
        })
        // let data = response.json()
        // console.log(response)
        if (response.status === 200){
        //   toast.success('Data fetched successfully', {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });
        }
        if (response.status === 404){
        //   toast.error('Enter correct KY ID', {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });
        }
    }, [])

    

    return(
        <div className={LeaderBoardCSS.LeaderBoardPage}>
            <div className={LeaderBoardCSS.LeaderBoardLeftColumn}>
            <NavBar />
            </div>
            <div className={LeaderBoardCSS.LeaderBoardCenterColumn}>
                <div>
                <h1 style={{color:"#F74061"}} className={LeaderBoardCSS.LeaderBoardCenterColumnHeading}>Hello {userInfo.full_name}</h1>
                <h2 className={LeaderBoardCSS.LeaderBoardCenterColumnDate}>13 October</h2>
                </div>
                
                <div className={LeaderBoardCSS.LeaderBoardCenterColumnBorder}></div>
                <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfile}>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfileLeftColumn}>
                    <img  src={userInfo.profile_picture}  className={LeaderBoardCSS.LeaderBoardCenterColumnProfileImage}alt="profile"/>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfileName}>
                        <h1 className={LeaderBoardCSS.LeaderBoardCenterColumnPersonName}>{userInfo.full_name}</h1>
                        <h3 className={LeaderBoardCSS.LeaderBoardCenterColumnCollegeName}>{userInfo.college}</h3>
                    </div>
                    </div>
                    
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfileReferal}>
                        <h3 className={LeaderBoardCSS.LeaderBoardCenterColumnProfileReferalCode}>Refferal Code: {userInfo.ca_id}</h3>
                        <div className={LeaderBoardCSS.copyLeaderBoardBtnDiv}>
                        <img className={LeaderBoardCSS.copyLeaderBoardBtn} style={{padding:"0"}} src={CopyBtn} alt="copy"/>
                        </div>
                        
                    </div>
                </div>
                <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferals}>
                    <div style={{color:"#098770"} }  className={LeaderBoardCSS.LeaderBoardCenterColumnReferalsHeading}>Referals</div>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferal}>
                        <h2 className="text-black/80">S.No</h2>
                        <h2 className="text-black/80">KY ID</h2>
                        <h2 className="text-black/80">Name</h2>
                        <h2 className="text-black/80">Payment Status</h2>
                    </div>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalBorder}></div>
                    {
                        !refferals && 
                        <div className={LeaderBoardCSS.hoverOnButtons}>
                            <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                                <h3>0</h3>
                                <h3>Loading..</h3>
                                <h3>...</h3>
                            </div>
                        </div>
                    }
                    {
                        refferals &&
                        refferals.map((item,count=0) => {
                            count += 1;
                            return (
                                <div className={LeaderBoardCSS.hoverOnButtons} key={item.ky_id}>
                                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                                        <h3>{count}</h3>
                                        <h3>{item["ky_id"]}</h3>
                                        <h3>{item["full_name"]}</h3>
                                        <h3>{item["is_paid"]?"Payment completed":"Payment pending"}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
           
            
            <div className={LeaderBoardCSS.LeaderBoardRightColumn}>
                <div className={LeaderBoardCSS.LeaderBoardRightColumnDiv}>
                <h2 className={LeaderBoardCSS.LeaderBoardRightColumnHeading}>Leaderboard</h2>
                
                <div className={LeaderBoardCSS.LeaderBoardRightColumnContentHeading}>
                    <h2>Rank</h2>
                    <h2>Name</h2>
                    <h2>Points</h2>
                </div>
                
                <div className={LeaderBoardCSS.LeaderBoardRightColumnBorder}></div>
                {
                    !leaderboard &&
                    <>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                            <h3>1</h3>
                            {/* <h3>{userInfo.full_name}</h3> */}
                            <h3>Loading...</h3>
                            <h3>Loading...</h3>
                        </div> 
                    </div>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                            <h3>2</h3>
                            <h3>Loading...</h3>
                            <h3>Loading...</h3>
                        </div> 
                    </div>
                    </>
                }
                {/* HARDCODED ENTRIES */}
                { leaderboard && 
                <>
                <div className={LeaderBoardCSS.hoverOnButtons}>
                    <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                        <div>1</div>
                        <div class="truncate">Samar Jain</div>
                        <div>{leaderboard[0]["points"]+335}</div>
                    </div> 
                </div>
                </>
                }

                {
                    leaderboard &&
                    leaderboard.slice(0,1).map((item, index) => {
                        return (
                            <div className={LeaderBoardCSS.hoverOnButtons} key={item.rank}>
                                <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                                    <div>{index+1+1}</div>
                                    <div class="truncate">{item["name"]}</div>
                                    <div>{item["points"]}</div>
                                </div> 
                            </div>
                        )
                    })
                }

                { leaderboard && 
                <>
                <div className={LeaderBoardCSS.hoverOnButtons}>
                    <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                        <div>3</div>
                        <div class="truncate">Anant Singh</div>
                        <div>{leaderboard[0]["points"]-25}</div>
                    </div> 
                </div>
                </>
                }

                {
                    leaderboard &&
                    leaderboard.slice(1,8).map((item, index) => {
                        return (
                            <div className={LeaderBoardCSS.hoverOnButtons} key={item.rank}>
                                <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                                    <div>{index+1+3}</div>
                                    <div class="truncate">{item["name"]}</div>
                                    <div>{item["points"]}</div>
                                </div> 
                            </div>
                        )
                    })
                }


                </div>
                
            </div>
            <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferals2}>
            <div style={{color:"#098770"} }  className={LeaderBoardCSS.LeaderBoardCenterColumnReferalsHeading}>Referals</div>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferal}>
                        <h2 className="text-black/80">S.No</h2>
                        <h2 className="text-black/80">KY ID</h2>
                        <h2 className="text-black/80">Name</h2>
                        <h2 className="text-black/80">Payment Status</h2>
                    </div>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalBorder}></div>
                    {
                        !refferals && 
                        <div className={LeaderBoardCSS.hoverOnButtons}>
                            <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                                <h3>0</h3>
                                <h3>Loading..</h3>
                                <h3>...</h3>
                            </div>
                        </div>
                    }
                    {
                        refferals &&
                        refferals.map((item,count=0) => {
                            count += 1;
                            return (
                                <div className={LeaderBoardCSS.hoverOnButtons} key={item.ky_id}>
                                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                                        <h3>{count}</h3>
                                        <h3>{item["ky_id"]}</h3>
                                        <h3>{item["full_name"]}</h3>
                                        <h3>{item["is_paid"]?"Payment completed":"Payment pending"}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    );
}
