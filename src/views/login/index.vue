<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-position="top"
      label-width="80px"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="btnLoading" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/services/user";
export default {
  name: "LoginIndex",
  data() {
    return {
      // 遮罩层
      btnLoading: false,
      form: {
        phone: "",
        password: "",
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1\d{10}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            mxin: 18,
            message: "密码长度为 6 到 18 位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 登录功能
    async onSubmit() {
      try {
        // 1.设置校验
        await this.$refs.form.validate();
        this.btnLoading = true;

        // 2.发送请求
        // const { data } = request({
        //   method: "POST",
        //   url: "/front/user/login",
        //   // urlencoded 格式：名=值&名=值。。
        //   data: qs.stringify(this.form),
        // });

        const { data } = await login(this.form);
        // 3.响应处理
        this.btnLoading = false;
        if (data.state === 1) {
          this.$router.push({
            name: "home",
          });
          this.$message.success("登录成功");
        } else {
          this.$message.error("登录失败");
        }
      } catch (err) {
        // 设置校验失败后的功能（提示）
        console.log("没有通过校验");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-form {
    background-color: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
  }

  .el-button {
    width: 100%;
  }
}
</style>
