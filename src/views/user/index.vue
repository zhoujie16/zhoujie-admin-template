<template>
	<div class="app-container">
		用户管理
		<div class="index-header">
			<el-row>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="用户名">
						<el-input v-model="formInline.user" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item label="账号">
						<el-input v-model="formInline.user" placeholder="账号"></el-input>
					</el-form-item>
					<el-form-item label="手机">
						<el-input v-model="formInline.user" placeholder="手机"></el-input>
					</el-form-item>
					<el-form-item label="邮箱">
						<el-input v-model="formInline.user" placeholder="邮箱"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
						<el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
						<el-button type="danger" @click="onSubmit">删除</el-button>
					</el-form-item>
				</el-form>
			</el-row>
		</div>
		<div class="index-body">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column type="selection" width="50"></el-table-column>
				<el-table-column type="index" width="50"></el-table-column>
				<el-table-column prop="user_name" label="账号"></el-table-column>
				<el-table-column prop="user_coded" label="姓名"></el-table-column>
				<el-table-column prop="mobile" label="手机"></el-table-column>
				<el-table-column prop="e_mail" label="邮箱"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			 :page-sizes="[10, 20, 30, 40]" :page-size="form.page_size" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
		<!-- 弹窗 -->
		<el-dialog title="用户信息" :visible.sync="dialogFormVisible">
			<el-form :model="form" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="form.user_name"></el-input>
				</el-form-item>
				<el-form-item label="账号">
					<el-input v-model="form.user_code"></el-input>
				</el-form-item>
				<el-form-item label="手机">
					<el-input v-model="form.mobile"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="form.e_mail"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.pwd_1"></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input v-model="form.pwd_2"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="addUser">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		addUser
	} from '@/api/user'
	export default {
		data() {
			return {
				total: 1000,
				formInline: {
					user: '',
					region: ''
				},
				currentPage: 1,
				dialogFormVisible: false,
				form: {
					user_name: '',
					user_code: '',
					mobile: '',
					e_mail: '',
					pwd_1: '',
					pwd_2: '',
					page_size: 10,
					page_num: 1,
				},
				tableData: function() {
					let arr = [];
					for (var i = 0; i < 20; i++) {
						arr.push({
							user_name: 'user_name',
							user_code: 'user_code',
							mobile: 'mobile',
							e_mail: 'e_mail',
							pwd_1: '',
							pwd_2: ''
						})
					}
					return arr;
				}()
			}
		},
		methods: {
			onSubmit() {
				console.log('表单查询')
			},
			addUser() {
				console.log('添加用户')
				//this.dialogFormVisible = false
				addUser(this.form).then(response => {
					console.log('hahah', response)
				})
			},
			handleEdit() {
				console.log('handleEdit');
				this.dialogFormVisible = true
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.form.page_size = val;
				this.onSubmit()
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.form.page_num = val;
				this.onSubmit()
			}
		}
	}
</script>

<style scoped="scoped">
</style>
