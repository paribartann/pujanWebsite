import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import Lists from "../ListComponent/listmodule";

function Paper() {
  return (
    <div className="container">
      <Navbar />
      <div className="container" style={{ padding: "100px" }}>
        <Lists
          title="How the Tables Have Turned: Studying the New Wave of Social Bots on Twitter Using Complex Network Analysis Techniques"
          description="Twitter bots have evolved from easily-detectable, simple content spammers with bogus identities to sophisticated players embedded in deep levels of social networks, silently promoting affiliate campaigns, marketing various products and services, and orchestrating or coordinating political activities. Much research has been reported on building accurate machine learning classifiers to identifying bots in social networks; recent works on social bots have started the new line of research on the existence, placement, and functions of the bots in a collective manner. In this paper, we study two families of Twitter bots which have been studied previously with respect to spamming activities through advertisement and political campaigns, and perform an evolutionary comparison with the new waves of bots currently found in Twitter. We uncover various evolved tendencies of the new social bots under social, communication, and behavioral patterns. Our findings show that these bots demonstrate evolved core-periphery structure; are deeply embedded in their networks of communication; exhibit complex information diffusion and heterogeneous content authoring patterns; perform mobilization of leaders across communication roles; and reside in niche topic communities. These characteristics make them highly deceptive as well as more effective in achieving operational goals than their traditional counterparts. We conclude by discussing some possible applications of the discovered behavioral and social traits of the evolved bots, and ways to build effective bot detection systems."
	  thumbnail="http://pujanpaudel.com/asonamimage.png"
          href="http://pujanpaudel.com/asonam2019.pdf"
        />

        <Lists
          title="User Level Multi-feed Weighted Topic Embeddings for Studying Network Interaction in Twitter"
          description="Over half a billion tweets on a wide range of topics are posted daily by hundreds of millions of Twitter users. Insights of user behavior and network interactions can be applied to practical applications like targeted advertising, viral marketing, political campaigns, etc. In this paper, we propose a Multi-Feed Weighted Topic Embeddings (MFWTE) model to study user network interaction and topic diffusion patterns on Twitter. Our method extracts topic embeddings from multiple views of a Twitter user feed and weights them according to their content authoring roles, where the authored tweets, replied tweets, retweeted tweets, and favorited tweets are the views we separate for constructing the embeddings. We test the proposed method using two different topic modeling algorithms: (i) Latent Dirichlet Allocation (ii) Twitter-Latent Dirichlet Allocation. The users in our study are divided into multiple hierarchies based on their activity composition regarding individual topics, and the effectiveness of MFWTE is evaluated in the multi-hierarchical setting. The performance of our method on friendship recommendation and retweet behavior prediction task is evaluated using various ranked retrieval measures. The results indicate that our MFWTE method for topic modeling of Twitter users improves over various previous baselines. We conclude our work by applying the proposed model, MFWTE to discover various information diffusion patterns on Twitter."

	  href="http://pujanpaudel.com/bdc.pdf"
	  thumbnail="http://pujanpaudel.com/bdcatlogo.png"
        />
         <Lists
          title="The devil is in the details : Studying the Influence and Content Diffusion Dynamics of Social Bots During 2014 Italian Mayoral Elections"
          description="Twitter bots have been exercised by political parties and state-level agencies in many contexts. From state-sponsored trolls to political amplifiers, bots have made their mark in the elections. But, the question of how effective and successful strategies of these bots could be in comparison to humans in the same election is an open question. In this work, we study the Twitter bots in the Mayoral Election of Italy in 2013 and compare them with human users activity. Our analysis of the echo-chamber effect, the emotional cost of information diffusion, and mechanism of information spreading reveals us the bots being able to reach wider ideology of political ideology by tweeting with lesser emotional cost in their tweets. We also conduct meme analysis and longitudinal analysis of user roles where the Twitter bots have an edge on showing more effective tweeting and diffusing behaviours. We then discuss the possible implications of this effective behaviour of bots on multiple dimensions and how twitter bots could be deployed in jeopardizing the political process."
	  href="http://pujanpaudel.com/italianelection.pdf"
	  thumbnail="http://pujanpaudel.com/devilsimage.png"
        />
      </div>
    </div>
  );
}

export default Paper;
