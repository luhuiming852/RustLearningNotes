### cargo

- cargo 是 Rust 的构建、包管理工具  
  构建代码、下载依赖的库、构建库等等

- 安装 Rust 时会自动安装 cargo

```sh
# 查看cargo
> cargo --version
```

### 使用 cargo 创建项目

- 创建命令：

```sh
> cargo new hello_cargo
```

#### 生成目录

- src 源码目录
  - main.rs
- Cargo.toml
- .gitignore

### Cargo.toml

- toml 是 cargo 的配置文件

```
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

- [package] 基本信息
  - name 项目名
  - version 项目版本
  - authors 作者
  - edition rust 版本
- [dependercies] 项目依赖项配置
- rust 里，代码的包称作 crate

### src/main.rs

- cargo 生成的 main.rs 在 src 目录下
- 代码都要放置在 src 中
- Cargo.toml 在根目录下
- 根目录放置许可信息、配置文件以及其他与程序代码无关的文件

::: tip
创建项目时没有使用 cargo，可以把源码文件添加到 src 中  
并创建 Cargo.toml 文件
:::

### Cargo build

- 编译项目，创建可执行文件。  
  位置：target/debug/hello_cargo.exe
- 第一次运行 cargo build 会生成cargo.lock文件

- cargo.lock    
该文件是追踪项目依赖的精确版本。不需要手动修改该文件。

### 构建和运行cargo项目
``` sh
> cargo run 
```
- 编译代码+执行

### 代码检查
```sh
> cargo check
```
- 检查代码，确保能通过编译，不产生任何可执行文件。

### 发布构建
``` sh 
> cargo build --release
```
- 编译时会进行优化。代码运行更快，编译时间更长
- 生成文件在target/release下