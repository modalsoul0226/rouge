import * as React from "react"

import * as styles from "./banner.module.scss"

const test = {
    width: "50%"
}

const test2 = {
    marginLeft: "50%",
    width: "50%"
}

const test3 = {
    marginLeft: "25%",
    width: "60%"
}

const Banner = () => {
    return (
        <div className={styles.container + " paragraph"}>
            <div className={styles.cover}></div>
            <div className={styles.intro}>
                <div>
                    <p className="h2-pen">Marxist cultural study group based in Toronto.</p>
                    <p className="h2-zh">多伦多马克思主义文化学习小组</p>
                </div>
                <p className="h2-zh">将意识与社会整体联系起来，就能认识人们在特定生活状况中，可能具有的那些思想、感情等等；如果对这种状况以及丛中产生的各种利益能够联系到它们对直接行动以及整个社会结构的影响予以完全把握，就能认识与客观状况相符的思想与感情等等。</p>
                <p className="h2-zh">——格奥尔格·卢卡奇<br/><cite>历史与阶级意识</cite></p>
            </div>
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
            <div>
                <p className="h2-zh" style={test2}>
                “ 我们又能有什么办法呢，总得活下去呀！
［停顿。
我们要继续活下去，万尼亚舅舅，我们来日还有很长、很长一串单调的昼夜；我们要耐心地忍受行将封来的种种考验。我们要为别人一直工作到我们的老年，等到我们的岁月一旦终了，我们要毫无怨言地死去，我们要在另一个世界里说，我们受过一辈子的苦，我们流过一辈子的泪，我们一辈子过的都是漫长的辛酸岁月，那么，上帝自然会可怜我们的，到了那个时候，我的舅舅，我的亲爱的舅舅啊，我们就会看见光辉灿烂的、满是愉快和美丽的生活了，我们就会幸福了，我们就会带着一副感动的笑容，来回忆今天的这些不幸了，我们也就会终于尝到休息的滋味了。我这样相信，我的舅舅啊，我虔诚地、热情地这样相信啊……（不由自主地跪在他的面前，把脸伏在他的两手上，低沉的[…]”

Excerpt From
万尼亚舅舅·三姊妹·樱桃园 (契诃夫戏剧全集)
安东·契诃夫 （Anton Chekhov）
This material may be protected by copyright.
                </p>
            </div>
            <div>
                <p className="h2-zh" style={test3}>
                “ 我们又能有什么办法呢，总得活下去呀！
［停顿。
我们要继续活下去，万尼亚舅舅，我们来日还有很长、很长一串单调的昼夜；我们要耐心地忍受行将封来的种种考验。我们要为别人一直工作到我们的老年，等到我们的岁月一旦终了，我们要毫无怨言地死去，我们要在另一个世界里说，我们受过一辈子的苦，我们流过一辈子的泪，我们一辈子过的都是漫长的辛酸岁月，那么，上帝自然会可怜我们的，到了那个时候，我的舅舅，我的亲爱的舅舅啊，我们就会看见光辉灿烂的、满是愉快和美丽的生活了，我们就会幸福了，我们就会带着一副感动的笑容，来回忆今天的这些不幸了，我们也就会终于尝到休息的滋味了。我这样相信，我的舅舅啊，我虔诚地、热情地这样相信啊……（不由自主地跪在他的面前，把脸伏在他的两手上，低沉的[…]”

Excerpt From
万尼亚舅舅·三姊妹·樱桃园 (契诃夫戏剧全集)
安东·契诃夫 （Anton Chekhov）
This material may be protected by copyright.
                </p>
            </div>
        </div>
    )
}

export default Banner
