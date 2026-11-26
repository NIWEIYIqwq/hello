# hello

一个用来练手的 Node.js 小项目：用 [dayjs](https://day.js.org/) 打印当前时间和星期。

## 运行

```bash
npm install
node index.js
```

输出示例：

```
现在时间： 2026-11-26 13:12:45
今天是：   星期四
```

## 目录结构

```
hello/
├── index.js          # 入口文件
├── package.json      # 项目信息与依赖
├── package-lock.json # 依赖版本锁定
├── .gitignore        # 忽略 node_modules 等不该提交的文件
└── README.md
```

## 这个项目里用到的

| 知识点 | 说明 |
| --- | --- |
| `npm init` | 生成 `package.json` |
| `npm install dayjs` | 安装依赖，自动写进 `dependencies` |
| `require()` | CommonJS 引入模块 |
| `.gitignore` | 排除 `node_modules/`、日志、`.env` |
| `git commit` / `git push` | 本地提交并推送到 GitHub |

## 关于依赖

`node_modules/` 不会提交到仓库——别人拿到代码后执行 `npm install` 就能还原全部依赖，这比把几万个文件塞进 Git 更合理。

## 作者

霓为衣 · [@NIWEIYIqwq](https://github.com/NIWEIYIqwq)
