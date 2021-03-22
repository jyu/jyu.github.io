import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import Cake from "../../media/cake.jpg";

function Food(props) {
  const { classes } = props;
  const isMobile = window.innerWidth <= 800;
  return (
    <div className={classes.component}>
      <div className={!isMobile ? classes.container : classes.containerMobile}>
        <h1 className={classes.h1}>Food - Intro</h1>
        <img
          src={Cake}
          className={!isMobile ? classes.img : classes.imgMobile}
          alt="content"
        />
        <p className={classes.p}>
          Welcome to my food blog. :) I’m Jerry and I like eating food.
        </p>
        <p className={classes.p}>
          My phone has been filled up with food pictures, so this blog is an
          attempt to preserve some of these moments before I forget.
        </p>

        <p className={classes.p}>
          As far as I can remember, food has been a special place in my life. As
          you can see in the picture above from my 9th birthday, I’m stuffing my
          face with Asian sponge cake topped with fruit and whipped cream.
        </p>
        <p className={classes.p}>
          As I was growing up, my family emphasized the importance of food. My
          dad told me stories about growing up in China on rations for rice,
          protein, and vegetables. One story stands out in particular where his
          family traded away their cigarette rations for more egg rations to
          have more protein.
        </p>
        <p className={classes.p}>
          My mom has always pushed me to think critically about what I eat,
          quizzing me about what ingredients are behind a certain dish. In our
          Shanghainese family, the ultimate metric for a dish was the Chinese
          word 鲜 or xiān. The character 鲜 is made up of the Chinese characters
          of a fish and lamb, two proteins held in high regard in Chinese
          cuisine. The best way I can describe it is the deepness in flavor,
          closest to umami. 鲜 is something we always are chasing when eating,
          and it’s what separates the best food from the rest.
        </p>
        <p className={classes.p}>
          I really enjoy traveling and learning about new and different food
          cultures. I realized recipes we cook today are built on thousands of
          years of collective human food knowledge. I see documenting delicious
          meals as a way to share its cultures to a tiny corner of the internet
          and as a small way to give back to the cultures behind them.
        </p>
        <p className={classes.p}>
          If you made it this far, thanks a lot for reading my ramblings. I hope
          you try out some of the food featured in this blog. They are made by
          passionate people who pour their hearts into their food.
        </p>
        <a className={classes.a} href="/food">
          Back to the blog
        </a>
      </div>
    </div>
  );
}

export default withStyles(styles)(Food);
