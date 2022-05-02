### 安装 Rust

- 官网地址：[https://www.rust-lang.org](https://www.rust-lang.org)

- Linux or Mac:    
``` sh
> curl https://sh.rustup.rs -sSf|sh
```

### 更新卸载
- 更新
``` sh
> rustup update
```
- 卸载
``` sh
> rustup self uninstall
```

### 安装验证
``` sh
> rustc --version 
> rustc 1.60.0 (7737e0b5c 2022-04-04)
```   

### 本地文档
- 安装Rust的时候，还会在本地安装离线文档
- 运行命令查看
``` sh
> rustup doc
```