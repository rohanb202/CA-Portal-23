import React from "react";
import LeaderBoardCSS from './LeaderBoard.module.css';
// import LeaderBoardCSS from './Lea'
import './navbar.css'
import NavBar from "../navbar/navbar";
import GOH from './img/GOH.jpg'
import CopyBtn from './img/Vector.svg';

export default function LeaderBoard (){


    return(
        <div className={LeaderBoardCSS.LeaderBoardPage}>
            <div className={LeaderBoardCSS.LeaderBoardLeftColumn}>
            <NavBar />
            </div>
            <div className={LeaderBoardCSS.LeaderBoardCenterColumn}>
                <div>
                <h1 style={{color:"#F74061"}} className={LeaderBoardCSS.LeaderBoardCenterColumnHeading}>Hello Peter</h1>
                <h2 className={LeaderBoardCSS.LeaderBoardCenterColumnDate}>13 October</h2>
                </div>
                
                <div className={LeaderBoardCSS.LeaderBoardCenterColumnBorder}></div>
                <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfile}>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfileLeftColumn}>
                    <img  src={GOH}  className={LeaderBoardCSS.LeaderBoardCenterColumnProfileImage}alt="profile"/>
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfileName}>
                        <h1 className={LeaderBoardCSS.LeaderBoardCenterColumnPersonName}>Peter Parker</h1>
                        <h3 className={LeaderBoardCSS.LeaderBoardCenterColumnCollegeName}>IIT BHU</h3>
                    </div>
                    </div>
                    
                    <div className={LeaderBoardCSS.LeaderBoardCenterColumnProfileReferal}>
                        <h3 className={LeaderBoardCSS.LeaderBoardCenterColumnProfileReferalCode}>Refferal Code: #KYCA007</h3>
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
           
            
            <div className={LeaderBoardCSS.LeaderBoardRightColumn}>
                <div className={LeaderBoardCSS.LeaderBoardRightColumnDiv}>
                <h1 className={LeaderBoardCSS.LeaderBoardRightColumnHeading}>Leaderboard</h1>
                
                <div className={LeaderBoardCSS.LeaderBoardRightColumnContentHeading}>
                    <h2>Rank</h2>
                    <h2>Name</h2>
                    <h2>Referred</h2>
                </div>
                
                <div className={LeaderBoardCSS.LeaderBoardRightColumnBorder}></div>
                <div className={LeaderBoardCSS.hoverOnButtons}>
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
                </div>    
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