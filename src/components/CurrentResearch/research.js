import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import Lists from "../ListComponent/currentproject";
import ExpandList from "../ListComponent/currentproject_expand";

function Research() {
  return (
    <div className="container">
      <Navbar />
      <div className="container" style={{ padding: "100px" }}>
        <ExpandList
          title="The Blind Spot of Twitter Bot Detection: Studying the traits of accounts who survived amongst the batch of suspended accounts."
        description="Automated accounts on Twitter have been a major problem since the earlier days of the existence of social media and they have been evolving as key players in Twitter with the maturity and wide adoption of the social network platform. The state-of-the-art tools have been able to detect a plethora of use cases of Twitter bots using network-level features and machine learning features, but a large portion of Twitter bots are still active in the platform. The ambiguity of the business model of Twitter to allow automated accounts, alongside its policy against automated activity has resulted in constant outgrowth in the bot population on Twitter. In light of recent controversies and concerns of the US government, Twitter has taken steps to regulate the automated accounts and pruned a large magnitude of the bots. Despite its efforts, the majority of the accounts belonging to the same Botnet campaign, or operation have been still active on the platform. In this work, we perform a comparative analysis of the deleted and still persistent accounts belonging to the same bot campaign for three different previously bot campaigns from the literature. We compare and contrast the network-based, content-based and diffusion-based characteristics of the extinguished and persistent bots and reason what makes these bots undetected from Twitter’s platform moderation. We hope to extract the multiple dimensions of this blind spot of Twitter bot detection and also discuss the consequences these further undetected accounts may have, on further re-use of them in different disinformation campaigns, as it has been shown that automated accounts are used across social movements (e.g Brexit and US election). We discuss on the survivability of the active accounts and its correlation with the activity and influence of the bots. Finally, we also extract multi-dimensional features of these surviving accounts which could be further used to improve real-time bot detection systems and help in exploratory bot detection on the wild."
	  />

        <Lists
          title="Started from the bottom, now  we are here. Exploring and uncovering social botnets through random walks on communication networks"
          description="Social bots have matured themselves over the years to deceptively embed themselves in the communication graph of human networks and effectively spread their campaign level messages. 
The conversation networks provide us a rich as well equally challenging opportunity to uncover participant bots of a larger botnet campaign. Prior works have used random walks on social graphs 
to discover important social actors and important social phenomena in complex networks. But random walks on communication networks to discover social bots is still an unexplored area. 
In this work, we are working on devising methods of random walk on complex network which can help uncover the greater portion of a botnet ,starting from simple, easily detectable seed accounts. 
We will use the idea of ranking social bots to determine seed accounts and perform various types of random walks on the communication networks to detect further botnets. 
For making our study more robust , we will be using the datasets of bots disinformation campaign across various countries recently released by Twitter 
We will devise multiple unsupervised and adaptive random walk strategy on communication networks will help us uncover a bigger part of social botnets through initial suspected seed accounts."
        />
      </div>
    </div>
  );
}

export default Research;
