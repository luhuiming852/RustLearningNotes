### Rust 程序

- 程序文件后缀名：rs
- 文件命名规范：main.rs，全部小写字母，下划线连接

### 创建 Rust 代码

- 新建 hello world.rs 文件

```rust
fn main(){
    println!("hello world")
}
```

### 编译运行

- 编译

```sh
> rustc main.rs
```

- 运行

```sh
# windows
> .\main.exe
# linux/mac
> ./main
```

::: danger 编译错误解决方法
执行:  
rustup toolchain install stable-x86_64-pc-windows-gnu  
rustup default stable-x86_64-pc-windows-gnu
:::

### 代码说明

- 定义函数：fn main(){}  
  没有参数，没有返回值

- main 函数是 Rust 程序的入口函数
- println!是一个 Rust macro(如果是函数的话，就没有！)

::: tip 编译和运行

- 运行之前必须先编译,命令为：rust main.rs
- 编译成功后会生成一个二进制文件  
  windows 下还会生成一个.pdb 文件，里面包含调试信息
- 编译生成的可执行文件不需要额外的运行环境
- rustc命令只适合简单的 Rust 程序
  :::
