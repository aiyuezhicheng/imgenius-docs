// 只配置执行、审核、新建模块的完整配置
var list = [{
    'Name': '作业组属性增强-字符串-执行',
    'IsAliIcon': true,
    'IconClass': 'aliicon-ali-baseinfo',
    'JumpToPageType': 'executeOverview',
    'FilterCondition': {
        'TaskGroupTemplateNames': '表单模式-作业组属性增强-字符串',
        'GroupNames': '表单模式'
    }
}, {
    'Name': '作业组属性增强-字符串-审核',
    'IsAliIcon': true,
    'IconClass': 'aliicon-ali-audit',
    'JumpToPageType': 'auditOverview',
}, {
    'Name': '作业组属性增强-字符串-新建',
    'IsAliIcon': false,
    'IconClass': 'idong-icon icon-toExecuteTG-idong',
    'JumpToPageType': 'createOverview',
    'FilterCondition': {
        'TaskGroupTemplateNames': '表单模式-作业组属性增强-字符串',
        'GroupNames': '表单模式'
    }
}];
// 配置执行、审核、新建模块如下配置，
// Name:显示的名称，必填
// IsAliIcon:是否是阿里图标，true或false，选填
// IconClass:图标的名称，字符串，选填，如果是阿里图标aliicon-ali-baseinfo，如果不是阿里图标idong-icon icon-toExecuteTG-idong
// JumpToPageType:跳转的页面，必填，新建-createOverview,执行-executeOverview,审核-auditOverview
// FilterCondition:跳转页面的筛选数据条件，选填，筛选出的数据会既满足TaskGroupTemplateNames又满足GroupNames
//     TaskGroupTemplateNames:作业组模板名称，选填
//     GroupNames:作业组组名，选填
// 执行{
//     'Name': '作业组属性增强-字符串-执行',
//     'IsAliIcon': true,
//     'IconClass': 'aliicon-ali-baseinfo',
//     'JumpToPageType': 'executeOverview',
//     'FilterCondition': {
//         'TaskGroupTemplateNames': '表单模式-作业组属性增强-字符串',
//         'GroupNames': '表单模式'
//     }
// };
// 新建{
//     'Name': '作业组属性增强-字符串-新建',
//     'IsAliIcon': false,
//     'IconClass': 'idong-icon icon-toExecuteTG-idong',
//     'JumpToPageType': 'createOverview',
//     'FilterCondition': {
//         'TaskGroupTemplateNames': '表单模式-作业组属性增强-字符串',
//         'GroupNames': '表单模式'
//     }
// },
// 审核 {
//     'Name': '作业组属性增强-字符串-审核',
//     'IsAliIcon': true,
//     'IconClass': 'aliicon-ali-audit',
//     'JumpToPageType': 'auditOverview',
// });


// 其他模块，日志，消息订阅不含FilterCondition字段，其他字段和新建、执行、审核含义相同，JumpToPageType都是固定
// 日志
// {
//     'Name': '日志',
//     'IconClass': 'idong-icon icon-log-idong fontIcon mui-icon',
//     'JumpToPageType': 'operaLog',
//     'IsAliIcon': false
// }
// 消息订阅
// {
//     'Name': '消息订阅',
//     'IconClass': 'aliicon-ali-msgSubscription',
//     'JumpToPageType': 'msgSubscription',
//     'IsAliIcon': true
// }


// 配置系统扩展中的'终端自定义' 都有加一个固定字段IsDynamic(是否动态)值都为true
// {
//     'IsDynamic':true, // 必填，值为true
//     'Name':'xxx'  // 必填，系统扩展中系统扩展名，如果重复，只能显示第一个
//      'IsAliIcon':xx, // 选填
//      'IconClass':'xx' // 选填
// }


// var list = [{
//     'Name': '作业组属性增强-字符串-执行',
//     'IsAliIcon': true,
//     'IconClass': 'aliicon-ali-baseinfo',
//     'JumpToPageType': 'executeOverview',
//     'FilterCondition': {
//         'TaskGroupTemplateNames': '表单模式-作业组属性增强-字符串',
//         'GroupNames': '表单模式'
//     }
// }, {
//     'Name': '作业组属性增强-字符串-审核',
//     'IsAliIcon': true,
//     'IconClass': 'aliicon-ali-audit',
//     'JumpToPageType': 'auditOverview',
// }, {
//     'Name': '作业组属性增强-字符串-新建',
//     'IsAliIcon': false,
//     'IconClass': 'idong-icon icon-toExecuteTG-idong',
//     'JumpToPageType': 'createOverview',
//     'FilterCondition': {
//         'TaskGroupTemplateNames': '表单模式-作业组属性增强-字符串',
//         'GroupNames': '表单模式'
//     }
// },
// {
//     'IsDynamic': true,
//     'Name': '资产属性',
//     'IsAliIcon': false,
//     'IconClass': 'idong-icon icon-toExecuteTG-idong'
// },
// {
//     'IsDynamic': true,
//     'Name': '模糊查询 - 云',
// },
// {
//     'IsDynamic': true,
//     'Name': '新访问EOC-报表',
// }];

