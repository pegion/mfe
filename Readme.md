# 微前端介绍

本项目是微前端项目，在之前的微前端项目中进行改进。
本项目的后端共用一个，父项目自有一个，使用 Umi。

因为计划排程子项目不愿意使用 history 模式，只想用 hash 模式，而 umi 父项目的 qiankun-plugin 不支持父用 history 子用 hash。所以我们需要找到新的解决方法：
1） 父也用 hash，但是也遇到一些问题。
2） 父用 history，子用 hash 或者 History。但是我们不能用 qiankun-plugin，而是使用 qiankun!

第一种情况尝试过，遇到子应用切换时出现问题，所以尝试使用第二种

## 端口及 qiankun 模式介绍

后端端口统一使用 2000
前端端口使用如下：

| 项目      | 端口 | qiankun        |
| --------- | ---- | -------------- |
| main-umi  | 1500 | qiankun        |
| main-umi2 | 1501 | qiankun-plugin |
| sub-umi   | 1510 |                |
| sub-umi2  | 1520 |                |
| sub-vue   | 1530 |                |
| sub-vue2  | 1540 |                |

2 个主项目为 history 模式下，子项目能否同时支持 history 和 hash，或者分别为 history 和 hash 时会不会出现什么异常。

## 运行脚本使用 npm-run-all

参考： `npm-run-all 简化script配置` https://juejin.cn/post/6854573216363446286
