import React from "react"

import Body from "../layouts/body"
import Navigation from "../layouts/nav"
import Banner from "./banner"

const test = {
    width: "50%"
}

const Home = () => {
    return (
        <Body>
            <Navigation/>
            <Banner/>
            <div>
                <p className="h2-zh" style={test}>
                “ 我们又能有什么办法呢，总得活下去呀！
［停顿。
我们要继续活下去，万尼亚舅舅，我们来日还有很长、很长一串单调的昼夜；我们要耐心地忍受行将封来的种种考验。我们要为别人一直工作到我们的老年，等到我们的岁月一旦终了，我们要毫无怨言地死去，我们要在另一个世界里说，我们受过一辈子的苦，我们流过一辈子的泪，我们一辈子过的都是漫长的辛酸岁月，那么，上帝自然会可怜我们的，到了那个时候，我的舅舅，我的亲爱的舅舅啊，我们就会看见光辉灿烂的、满是愉快和美丽的生活了，我们就会幸福了，我们就会带着一副感动的笑容，来回忆今天的这些不幸了，我们也就会终于尝到休息的滋味了。我这样相信，我的舅舅啊，我虔诚地、热情地这样相信啊……（不由自主地跪在他的面前，把脸伏在他的两手上，低沉的[…]”

Excerpt From
万尼亚舅舅·三姊妹·樱桃园 (契诃夫戏剧全集)
安东·契诃夫 （Anton Chekhov）
This material may be protected by copyright.
                </p>
            </div>
        </Body>
    )
}

export default Home
