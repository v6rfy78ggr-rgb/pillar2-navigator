# Pillar 2 Navigator v2

[English](README.md) · [Deutsch](README.de.md) · [简体中文](README.zh-CN.md)

[项目入口](https://v6rfy78ggr-rgb.github.io/v6rfy78ggr-rgb/zh-CN.html) · [一分钟试用](TRY_IT.md) · [版本下载](https://github.com/v6rfy78ggr-rgb/pillar2-navigator/releases) · [打开演示](https://v6rfy78ggr-rgb.github.io/pillar2-navigator/)

在浏览器本地运行的德国 Pillar Two 义务初筛原型，帮助整理判断依据和仍需专业复核的事实。中文、德语和英语界面共用同一规则引擎。

## 如何试用

通过 **Code → Download ZIP** 下载并解压，运行 `python3 -m http.server 8000 --directory dist`，打开 <http://localhost:8000>。加载内置示例，完成五步流程后打印结果。开发检查为 `node test.cjs`，需要 Node.js 20 或以上，无须安装运行依赖。

## 功能

- 营收门槛和简化持股结构筛查，明确区分未知数据。
- 根据使用者确认的合格数据、调整和适用历史，初筛过渡期 CbCR 安全港。
- 分开提示集团负责人通知、GIR 和德国税务申报。
- 三语术语表、帮助说明和可打印 PDF 的报告；切换语言保留本次会话。

## 范围与验证

仅覆盖 **2024–2026 标准日历年度**，金额单位为**百万欧元**。非标准期间、重组、被排除实体、合营及未知事实需要另行评估。外国 IIR 状态和交换安排必须按年度确认；SBIE 为外部计算后输入。

本工具不计算补足税，不最终判定外国申报义务，不生成 GIR/XML，也不提交申报。未知数据不能推出“没有义务”。显示日期是名义日期，未调整周末、节假日或个别延期。

来源复核基准为 **2026年11月4日**，v2 日期为 **11月5日**。**2026年11月23日**重跑通过 **449 项断言**，覆盖边界、缺失值、语言一致性及报告转义；这不代表已覆盖后续法律变化或所有个案。应用内链接德国 MinStG、欧盟 2022/2523 指令等官方来源。

## 数据与反馈

没有应用后端、分析追踪或业务数据持久化；刷新会清空工作会话。打印报告包含输入事实，应自行保密。托管方可能记录普通访问请求。

欢迎用虚构持股链、门槛边界或缺失值案例反馈，并注明实际与预期结果、年度及具体法规来源。规则在 `dist/engine.js`，可复现检查在 `test.cjs`。

## 参与完善

[提交问题或建议](https://github.com/v6rfy78ggr-rgb/pillar2-navigator/issues/new/choose)，支持中文、德语和英语。请只使用虚构数据，公开 Issue 任何人都能看到。协作流程见 [CONTRIBUTING.md](CONTRIBUTING.md)，MIT 许可见 [LICENSE](LICENSE)。
