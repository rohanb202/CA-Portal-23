import React,{ useState,useContext } from "react";
import LeaderBoardCSS from './LeaderBoard.module.css';
// import LeaderBoardCSS from './Lea'
// import './navbar.css'
import NavBar from "../navbar/navbar";
import GOH from './img/GOH.jpg'
import CopyBtn from './img/Vector.svg';
import AuthContext from "../../context/AuthContext";

export default function LeaderBoard (){
    const {userInfo} = useContext(AuthContext);
    const [refferals, setrefferals] = useState(null);
    const [leaderboard, setleaderboard] = useState(null);
    // const [userInfo, setuserInfo] = useState({
    //     full_name:'peter',
    //     ca_id:4,
    //     college:'iitbhu',
    //     profile_picture:'www.google.com'
    // })

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
                        <h2>S.No</h2>
                        <h2>KY ID</h2>
                        <h2>Name</h2>
                    </div>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalBorder}></div>
                    {
                        !refferals && 
                        <div className={LeaderBoardCSS.hoverOnButtons}>
                            <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                                <h3>0</h3>
                                <h3>Coming</h3>
                                <h3>Soon</h3>
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
                                        <h3>{item.ky_id}</h3>
                                        <h3>{item.username}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>1</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div>
                    
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>2</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>3</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>4</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div> */}
                </div>
            </div>
           
            
            <div className={LeaderBoardCSS.LeaderBoardRightColumn}>
                <div className={LeaderBoardCSS.LeaderBoardRightColumnDiv}>
                <h1 className={LeaderBoardCSS.LeaderBoardRightColumnHeading}>Leaderboard</h1>
                
                <div className={LeaderBoardCSS.LeaderBoardRightColumnContentHeading}>
                    <h2>Rank</h2>
                    <h2>Name</h2>
                    <h2>Referred</h2>
                </div>
                
                <div className={LeaderBoardCSS.LeaderBoardRightColumnBorder}></div>
                {
                    !leaderboard &&
                    <>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                            <h3>1</h3>
                            <h3>{userInfo.full_name}</h3>
                            <h3>0</h3>
                        </div> 
                    </div>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                            <h3>2</h3>
                            <h3>Coming</h3>
                            <h3>Soon</h3>
                        </div> 
                    </div>
                    </>
                }
                {
                    leaderboard &&
                    leaderboard.map((item) => {
                        return (
                            <div className={LeaderBoardCSS.hoverOnButtons} key={item.rank}>
                                <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                                    <h3>{item.rank}</h3>
                                    <h3>{item.username}</h3>
                                    <h3>{item.refferals}</h3>
                                </div> 
                            </div>
                        )
                    })
                }
                {/* <div className={LeaderBoardCSS.hoverOnButtons}>
                    <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                        <h3>1</h3>
                        <h3>Lorem</h3>
                        <h3>Ipsum</h3>
                    </div> 
                </div>
                    
                <div className={LeaderBoardCSS.hoverOnButtons}>
                    <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                        <h3>2</h3>
                        <h3>Lorem</h3>
                        <h3>Ipsum</h3>
                    </div> 
                </div>
                <div className={LeaderBoardCSS.hoverOnButtons}>
                    <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                        <h3>3</h3>
                        <h3>Lorem</h3>
                        <h3>Ipsum</h3>
                    </div> 
                </div>
                <div className={LeaderBoardCSS.hoverOnButtons}>
                    <div className={LeaderBoardCSS.LeaderBoardRightColumnContent}>
                        <h3>4</h3>
                        <h3>Lorem</h3>
                        <h3>Ipsum</h3>
                    </div> 
                </div>     */}
                </div>
                
            </div>
            <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferals2}>
                    <h1 style={{color:"#098770"}}>Referals</h1>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferal}>
                        <h2>S.No</h2>
                        <h2>KY ID</h2>
                        <h2>Name</h2>
                    </div>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalBorder}></div>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>1</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div>
                    
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>2</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>3</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div>
                    <div className={LeaderBoardCSS.hoverOnButtons}>
                        <div className={LeaderBoardCSS.LeaderBoardCenterColumnReferalContent}>
                            <h3>4</h3>
                            <h3>Lorem</h3>
                            <h3>Ipsum</h3>
                        </div>
                    </div>
                </div>
        </div>
    );
}