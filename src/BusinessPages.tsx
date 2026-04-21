import { AlertTriangle, TrendingUp, Clock, Package, PlusCircle, PenSquare, Search, Filter, Settings, BellRing, MapPin, Compass } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { AnimatedPage, AnimatedItem } from './components/Motion';

export function MerchantRegister() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-4">
       <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
          <h1 className="text-2xl font-bold text-center mb-2 text-[var(--color-text-main)]">商家入驻申请</h1>
          <p className="text-gray-500 text-sm text-center mb-8">加入RescueFood，零门槛挽救临期损耗</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); console.log('POST /merchant/register'); alert('提交成功！请等待审核'); window.location.href = '/m/home'; }}>
             <div><label className="text-sm font-bold block mb-1">店铺名称</label><input required placeholder="例：阳光临期超市" className="w-full border border-gray-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none px-4 py-2.5 rounded-xl bg-gray-50 transition-colors" /></div>
             <div><label className="text-sm font-bold block mb-1">营业执照信用代码</label><input required placeholder="必须为18位字符" className="w-full border border-gray-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none px-4 py-2.5 rounded-xl bg-gray-50 transition-colors" /></div>
             <div><label className="text-sm font-bold block mb-1">负责人手机号</label><input required type="tel" placeholder="接收平台重要通知" className="w-full border border-gray-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none px-4 py-2.5 rounded-xl bg-gray-50 transition-colors" /></div>
             <button type="submit" className="w-full btn btn-primary mt-6 text-base py-3.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform">提交入驻审核(POST)</button>
             <div className="text-center mt-4 text-xs text-gray-400">已有账号？<a href="/login" className="text-[var(--color-primary)]">返回登录</a></div>
          </form>
       </div>
    </div>
  )
}

const data = [
  { name: 'Mon', items: 400, revenue: 2400 },
  { name: 'Tue', items: 300, revenue: 1398 },
  { name: 'Wed', items: 200, revenue: 9800 },
  { name: 'Thu', items: 278, revenue: 3908 },
  { name: 'Fri', items: 189, revenue: 4800 },
  { name: 'Sat', items: 239, revenue: 3800 },
  { name: 'Sun', items: 349, revenue: 4300 },
];

export function MerchantHub() {
  return (
    <AnimatedPage className="flex flex-col gap-8 h-full max-w-[1600px] mx-auto w-full p-8 hidden-scrollbar overflow-y-auto">
      <AnimatedItem className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-3xl font-serif font-bold tracking-tight text-[#2B2D28]">门店工作台</h1>
          <p className="text-sm font-medium text-[#848A78] mt-2">数据最后同步: 今天 10:35 · 门店状态: <span className="text-[#3d5a41]">营业中</span></p>
        </div>
        <button className="btn btn-primary shadow-sm text-sm" onClick={()=>alert('发布新临期批次')}>+ 扫码发布新批次</button>
      </AnimatedItem>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 shrink-0">
         {[
           { title: "今日营业额", value: "¥ 1,280.50", desc: "较昨日 +12%", icon: TrendingUp, color: "text-[var(--color-primary)]", bg: "bg-[var(--color-primary)]/10" },
           { title: "已挽救重量", value: "45.2 kg", desc: "本周累计 210kg", icon: Package, color: "text-[var(--color-info)]", bg: "bg-[var(--color-info)]/10" },
           { title: "待处理订单", value: "8", desc: "2笔即将超时", icon: AlertTriangle, color: "text-[var(--color-danger)]", bg: "bg-[var(--color-danger)]/10" },
           { title: "临期预警", value: "12", desc: "急需分发批次", icon: Clock, color: "text-[var(--color-warning)]", bg: "bg-[var(--color-warning)]/10" }
         ].map((stat, i) => (
            <div key={i} className="card flex items-center justify-between">
               <div>
                 <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 pb-1">{stat.title}</div>
                 <div className="text-3xl font-black text-gray-900 tracking-tight mb-2">{stat.value}</div>
                 <div className={`text-xs font-bold ${stat.color}`}>{stat.desc}</div>
               </div>
               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                 <stat.icon size={28} />
               </div>
            </div>
         ))}
      </div>

      <AnimatedItem className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 flex-1 min-h-[400px]">
        <div className="card flex flex-col h-full">
          <h3 className="font-bold text-lg mb-6 shrink-0">挽救趋势概览 (近7日)</h3>
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--color-muted)', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--color-muted)', fontSize: 12}} dx={-10}/>
                <RechartsTooltip cursor={{stroke: 'var(--color-primary)', strokeWidth: 1, strokeDasharray: '4 4'}} contentStyle={{borderRadius: '8px', border: '1px solid #f0f0f0', boxShadow: 'var(--shadow-card)'}}/>
                <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card flex flex-col h-full">
           <h3 className="font-bold text-lg mb-6 shrink-0">快捷操作</h3>
           <div className="grid grid-cols-2 gap-4 mb-8 shrink-0">
             <button className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex flex-col items-center justify-center text-sm font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors group">
                <PlusCircle size={24} className="mb-2 text-[var(--color-primary)] group-hover:text-white" />
                新增批次
             </button>
             <button className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex flex-col items-center justify-center text-sm font-medium hover:bg-[var(--color-info)] hover:text-white transition-colors group">
                <PenSquare size={24} className="mb-2 text-[var(--color-info)] group-hover:text-white" />
                批量调价
             </button>
           </div>
           
           <h3 className="font-bold text-lg mb-4 flex items-center justify-between shrink-0">
             近期预警 <span className="text-xs bg-[var(--color-danger)] text-white px-2 py-0.5 rounded-full">3</span>
           </h3>
           <div className="space-y-4 overflow-y-auto pr-2">
              {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-start gap-3 p-3 bg-red-50/50 rounded-lg border border-red-100 group cursor-pointer hover:bg-red-50 transition-colors">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-[var(--color-danger)] shrink-0"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">全麦切片吐司 (12件)</div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-2">剩不到1小时，建议报损或设1折。</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </AnimatedItem>
    </AnimatedPage>
  );
}

export function BatchBoard() {
  return (
    <div className="flex flex-col gap-6 h-full">
       <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-[var(--shadow-card)] shrink-0">
         <div className="flex gap-4">
           <div className="relative">
             <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
             <input type="text" placeholder="商品名称、批次号" className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 w-[300px]" />
           </div>
           <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
             <Filter size={16}/> 筛选状态
           </button>
         </div>
         <button className="btn btn-primary shadow-sm flex items-center gap-2 px-6">
           <PlusCircle size={18}/> 录入新批次
         </button>
       </div>

       <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] flex flex-col flex-1 min-h-[400px]">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-10"><input type="checkbox" className="rounded" /></th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">批次号 / 商品</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">库存 / 状态</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">到期时间</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">策略 / 操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                 {[
                   { batch: 'YGT-0420-A', name: '高蛋白低卡酸奶杯', stock: 12, status: '在售', time: '1小时20分', t: 'high' }
                 ].map((b, i) => (
                   <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"><Package size={20}/></div>
                           <div><div className="font-bold text-sm text-[var(--color-text-main)] mb-0.5">{b.name}</div><div className="text-xs font-mono text-[var(--color-muted)]">{b.batch}</div></div>
                         </div>
                      </td>
                      <td className="px-6 py-4">
                          <div className="font-bold text-sm text-gray-700 mb-1">{b.stock} 件</div>
                          <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[var(--color-success)]/10 text-[var(--color-success)]`}>{b.status}</span>
                      </td>
                      <td className="px-6 py-4"><span className="text-[var(--color-danger)] font-medium text-sm">{b.time}</span></td>
                      <td className="px-6 py-4 text-right flex gap-2 justify-end">
                          <button className="text-[var(--color-primary)] text-sm hover:underline px-2 py-2">促销</button>
                          <button className="text-gray-500 text-sm hover:underline px-2 py-2" onClick={() => alert('已冻结该库存')}>下架</button>
                          <button className="text-red-500 text-sm hover:underline px-2 py-2" onClick={() => alert('进入报损 / 废弃登记流程 (POST /merchant/batches/{id}/damage)')}>报损登记</button>
                      </td>
                   </tr>
                 ))}
              </tbody>
            </table>
          </div>
       </div>
    </div>
  )
}

export function MerchantOrders() {
  return (
    <div className="grid grid-cols-[300px_1fr] gap-6 h-full">
      <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-4 flex flex-col gap-4">
        <h3 className="font-bold text-lg mb-2">待接单池 <span className="text-sm font-normal text-gray-400 ml-2">(3)</span></h3>
        {[1,2,3].map(i => (
          <div key={i} className="p-4 border border-[var(--color-warning)] bg-[var(--color-warning)]/5 rounded-xl cursor-pointer hover:bg-[var(--color-warning)]/10 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-sm">#102{i} 线上单</span>
              <span className="text-[var(--color-danger)] font-bold text-sm">¥ 15.5</span>
            </div>
            <div className="text-xs text-gray-500 mb-4 line-clamp-2">包含: 全麦吐司x1, 鲜牛奶x2</div>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 border border-red-200 text-red-500 rounded text-xs font-medium bg-white">拒单</button>
              <button className="flex-1 py-1.5 bg-[var(--color-primary)] text-white rounded text-xs font-medium shadow-sm">接单</button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
         <h3 className="font-bold text-xl mb-6 border-b border-gray-100 pb-4 flex justify-between items-center">
            <span>订单详情: #1021</span>
            <span className="text-sm px-3 py-1 bg-red-50 text-red-600 rounded-full cursor-pointer hover:bg-red-100" onClick={() => alert('异常履约上报：请选择【缺货】、【备货失败】或【配送预警】，提交后将进入人工客服审核。')}>
               ⚠ 履约异常上报
            </span>
         </h3>
         <div className="text-[var(--color-muted)] text-sm mt-10 text-center">选择左侧订单查看详情、打单、呼叫运力</div>
      </div>
    </div>
  )
}

export function MerchantSettings() {
  return (
    <div className="card max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-serif font-bold mb-8 text-[#2B2D28] border-b border-[#EAE8E1] pb-4">门店营业设置</h2>
      
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('店铺信息更新成功'); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">门店名称</label>
            <input type="text" defaultValue="阳光临期超市" className="auth-input" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">联系人手机号</label>
            <input type="tel" defaultValue="13912345678" className="auth-input" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">营业开始时间</label>
            <input type="time" defaultValue="08:00" className="auth-input" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">营业结束时间</label>
            <input type="time" defaultValue="22:00" className="auth-input" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
              <label className="block text-sm font-bold text-[#646A58] mb-2">详细地址</label>
              <input type="text" defaultValue="高新区科技路18号附2号" className="auth-input" />
           </div>
           <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-bold text-[#646A58] mb-2">经度 (Lng)</label>
                <input type="text" defaultValue="104.066" className="auth-input bg-gray-50" readOnly title="由地址自动解析" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#646A58] mb-2">纬度 (Lat)</label>
                <input type="text" defaultValue="30.572" className="auth-input bg-gray-50" readOnly title="由地址自动解析" />
              </div>
           </div>
        </div>

        <h3 className="text-lg font-bold text-[#646A58] pt-4 border-t border-gray-50 pb-2">履约与订单策略</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div>
              <label className="block text-sm font-bold text-[#646A58] mb-2">起送价 (¥)</label>
              <input type="number" defaultValue="15" className="auth-input" />
           </div>
           <div>
              <label className="block text-sm font-bold text-[#646A58] mb-2">配送辐射半径 (km)</label>
              <input type="number" step="0.5" defaultValue="3.5" className="auth-input" />
           </div>
           <div>
              <label className="block text-sm font-bold text-[#646A58] mb-2">平均备货时长 (分钟)</label>
              <input type="number" defaultValue="15" className="auth-input" />
           </div>
        </div>

        <div className="flex items-center justify-between bg-[#F9F8F6] p-4 rounded-xl border border-[#EAE8E1]">
           <div>
              <div className="text-sm font-bold text-[#2B2D28] mb-1">店铺接单状态 (暂停/恢复)</div>
              <div className="text-xs text-[#646A58]">暂停营业期间将无法收到新订单，适合爆单或盘点期间开启</div>
           </div>
           <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in ml-4">
              <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-[#3d5a41] appearance-none cursor-pointer" defaultChecked style={{right: 0}} />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#3d5a41] cursor-pointer"></label>
           </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#646A58] mb-2 mt-4">店铺公告 / 描述</label>
          <textarea rows={3} defaultValue="致力于减少食物浪费，每日晚上8点后盲盒特价发售。支持环保自带购物袋立减0.5元。" className="auth-input resize-none py-3"></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#646A58] mb-2">紧急临期促销系统</label>
          <div className="flex items-center gap-4 bg-[#F9F8F6] p-4 rounded-xl border border-[#EAE8E1]">
             <BellRing size={20} className="text-[#eab308]"/>
             <span className="text-sm font-medium text-[#2B2D28]">当前设定: 距离过期前 1 小时自动打 3 折出售</span>
             <button type="button" className="ml-auto text-sm font-bold text-[var(--color-primary)] hover:underline">配置规则</button>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#EAE8E1] flex justify-end gap-4">
           <button type="button" className="btn bg-[#F3EFE9] text-[#646A58] hover:bg-[#EAE2D6]">重置</button>
           <button type="submit" className="btn btn-primary px-8">保存并应用</button>
        </div>
      </form>
    </div>
  )
}

export function MerchantProducts() {
  return (
    <div className="card max-w-4xl mx-auto mt-8">
       <h2 className="text-2xl font-serif font-bold text-[#2B2D28] mb-6 border-b border-gray-100 pb-4">商品基础库维护</h2>
       <div className="text-center py-12">
          <Package className="mx-auto text-gray-300 mb-4" size={48} />
          <h3 className="text-gray-500 font-bold">商品/SKU 字典数据库库 (开发中)</h3>
          <p className="text-sm text-gray-400 mt-2">用于支撑快捷录入批次选项，当前展示为合并试图。</p>
       </div>
    </div>
  )
}

export function MerchantPackages() {
  return (
    <div className="card max-w-4xl mx-auto mt-8">
       <h2 className="text-2xl font-serif font-bold text-[#2B2D28] mb-6 border-b border-gray-100 pb-4">套餐(Combo)管理</h2>
       <div className="text-center py-12">
          <Compass className="mx-auto text-gray-300 mb-4" size={48} />
          <h3 className="text-gray-500 font-bold">聚合并发套餐算法池 (开发中)</h3>
          <p className="text-sm text-gray-400 mt-2">手工套餐完整 CRUD 即将上线，已有套餐正由系统进行自动聚合。</p>
       </div>
    </div>
  )
}
