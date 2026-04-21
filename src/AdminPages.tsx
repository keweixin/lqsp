import { LayoutDashboard, Store, Users, ScrollText, CheckCircle, XCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminHome() {
  const data = [{name: 'M', rescued: 400}, {name: 'T', rescued: 300}, {name: 'W', rescued: 200}, {name: 'T', rescued: 278}, {name: 'F', rescued: 189}];
  
  return (
    <div className="flex flex-col gap-6 max-w-[1600px] mx-auto w-full p-8 hidden-scrollbar overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-serif font-bold tracking-tight text-[#2B2D28]">平台总览</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {[{t: '总计挽救食物', v: '2,450 kg'}, {t: '活跃商家数', v: '128'}, {t: '注册用户', v: '14,200'}, {t: '今日异常', v: '3'}].map(s => (
          <div key={s.t} className="card"><div className="text-sm font-bold text-[#848A78] uppercase tracking-widest mb-2">{s.t}</div><div className="text-3xl font-bold tracking-tight text-[#2B2D28]">{s.v}</div></div>
        ))}
      </div>
      <div className="card h-80">
        <h3 className="font-bold mb-4 font-serif text-lg">全平台食物挽救量 (kg)</h3>
        <ResponsiveContainer width="100%" height="80%"><BarChart data={data}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="rescued" fill="var(--color-primary)"/></BarChart></ResponsiveContainer>
      </div>
    </div>
  )
}

export function AdminMerchants() {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-6">入驻商家审核</h2>
      <table className="w-full text-left">
        <thead><tr className="border-b"><th className="pb-4">商户名称</th><th className="pb-4">资质状态</th><th className="pb-4">操作</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-4">GreenLife轻食 (西城店)</td><td className="py-4"><span className="text-[var(--color-warning)] font-bold">待审核 (材料待验)</span></td><td className="py-4"><button className="text-[var(--color-primary)] mr-4 hover:underline">详情留痕</button><button className="text-[var(--color-success)] mr-4 hover:underline" onClick={() => alert('审核通过 (POST /admin/merchants/{id}/approve)')}>通过</button><button className="text-red-500 hover:underline" onClick={() => alert('已驳回 (POST /admin/merchants/{id}/reject)')}>驳回</button></td></tr>
          <tr><td className="py-4">每日鲜面包</td><td className="py-4"><span className="text-[var(--color-success)] font-bold">已通过</span></td><td className="py-4"><button className="text-red-500 font-bold hover:underline" onClick={() => alert('执行封禁停用 (POST /admin/merchants/{id}/disable)')}>停用资质</button></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export function AdminRiders() {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-6">运力骑士实名与启用监控</h2>
      <table className="w-full text-left">
        <thead><tr className="border-b"><th className="pb-4">骑士姓名</th><th className="pb-4">载具类型</th><th className="pb-4">状态</th><th className="pb-4">操作</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-4">王建国</td><td className="py-4">电动单车</td><td className="py-4"><span className="text-[var(--color-success)] font-bold">已启用</span></td><td className="py-4"><button className="text-red-500 font-bold hover:underline" onClick={() => alert('执行停用此骑手 (POST /admin/riders/{id}/disable)')}>封禁停用</button></td></tr>
          <tr><td className="py-4">李飞</td><td className="py-4">厢式轻卡</td><td className="py-4"><span className="text-gray-400 font-bold">已封禁</span></td><td className="py-4"><button className="text-[var(--color-primary)] font-bold hover:underline" onClick={() => alert('解除封禁 (POST /admin/riders/{id}/enable)')}>解封</button></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export function AdminUsers() {
  return (
    <div className="card"><h2 className="text-xl font-bold mb-6">用户行为监管与信誉大池</h2>
      <table className="w-full text-left">
         <thead><tr className="border-b"><th className="pb-4">用户</th><th className="pb-4">行为信誉分</th><th className="pb-4">操作</th></tr></thead>
         <tbody><tr className="border-b"><td className="py-4">李华</td><td className="py-4 text-[var(--color-success)] font-bold">98 优秀</td><td className="py-4 flex gap-4"><button className="text-[var(--color-primary)] hover:underline">查看明细</button><button className="text-red-500 hover:underline" onClick={() => alert('严重违规，执行封禁 (POST /admin/users/{id}/ban)')}>解封/封禁</button></td></tr></tbody>
      </table>
    </div>
  )
}

export function AdminRules() {
  return (
    <div className="card max-w-2xl">
      <h2 className="text-xl font-bold mb-6">调度规则引擎配置</h2>
      <div className="space-y-6">
        <div>
          <label className="block font-bold mb-2">临期商品自动折扣阈值</label>
          <input type="range" className="w-full" />
          <div className="text-sm text-gray-500 mt-2">当前设定：距离过期前 3 小时开始触发自动减价。</div>
        </div>
        <div>
           <label className="block font-bold mb-2">推荐系统扩展权重 JSON (配置表)</label>
           <textarea rows={4} className="w-full border border-gray-200 rounded p-3 font-mono text-xs" defaultValue={`{\n  "recommendation.weights": {\n    "distance": 0.3,\n    "urgency": 0.5,\n    "userPreference": 0.2\n  }\n}`}></textarea>
        </div>
        <button className="btn btn-primary mt-4">更新引擎系统级规则</button>
      </div>
    </div>
  )
}

export function AdminReports() {
   return (<div className="card">
     <h2 className="text-xl font-bold mb-6">全平台统计报表 (GET /admin/reports)</h2>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100"><div className="text-blue-600 text-sm font-bold">综合挽救率</div><div className="text-3xl font-black mt-2 text-blue-900">84.5%</div></div>
        <div className="p-6 bg-red-50 rounded-xl border border-red-100"><div className="text-red-600 text-sm font-bold">不可抗力报损率</div><div className="text-3xl font-black mt-2 text-red-900">12.1%</div></div>
        <div className="p-6 bg-green-50 rounded-xl border border-green-100"><div className="text-green-600 text-sm font-bold">骑手配送准时率</div><div className="text-3xl font-black mt-2 text-green-900">99.2%</div></div>
        <div className="p-6 bg-[#FDFCF8] rounded-xl border border-[#EAE8E1]"><div className="text-[var(--color-primary)] text-sm font-bold">活跃常青商户</div><div className="text-3xl font-black mt-2 text-[#2B2D28]">128 家</div></div>
     </div>
   </div>);
}

export function AdminOrders() {
   return (<div className="card">
      <h2 className="text-xl font-bold mb-6 text-[var(--color-danger)]">异常订单风控中心</h2>
      <table className="w-full text-left">
        <thead><tr className="border-b"><th className="pb-4">订单号</th><th className="pb-4">异常原因</th><th className="pb-4">操作 (POST /handle)</th></tr></thead>
        <tbody>
           <tr className="border-b">
             <td className="py-4 font-mono text-sm">#99201</td>
             <td className="py-4 text-red-500 font-bold">超时未取货, 骑手失联</td>
             <td className="py-4 flex gap-2">
               <button className="text-[var(--color-primary)] font-bold text-sm bg-[var(--color-primary)]/10 px-3 py-1.5 rounded hover:bg-[var(--color-primary)]/20" onClick={()=>alert('调派备用运力网络')}>重新抛单/改派</button>
               <button className="text-red-600 font-bold text-sm bg-red-50 px-3 py-1.5 rounded hover:bg-red-100" onClick={()=>alert('后台强制撤单并退款')}>强制冲正关闭</button>
               <button className="text-gray-600 font-bold text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200" onClick={()=>prompt('输入追责备注信息')}>备注</button>
             </td>
           </tr>
           <tr>
             <td className="py-4 font-mono text-sm">#99318</td>
             <td className="py-4 text-orange-500 font-bold">商户上报部分缺货</td>
             <td className="py-4 flex gap-2">
               <button className="text-[var(--color-primary)] font-bold text-sm bg-[var(--color-primary)]/10 px-3 py-1.5 rounded hover:bg-[var(--color-primary)]/20" onClick={()=>alert('通知消费者进行部分退款确认')}>触发部分补偿流</button>
             </td>
           </tr>
        </tbody>
      </table>
   </div>);
}

export function AdminRecommendPerformance() {
   return (<div className="card">
     <h2 className="text-xl font-bold mb-6">智能推荐引擎效果洞察</h2>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="p-4 border rounded-xl"><div className="text-xs text-gray-500 font-bold">总页面曝光量 (UV)</div><div className="text-2xl font-black mt-1">294K</div></div>
        <div className="p-4 border rounded-xl"><div className="text-xs text-gray-500 font-bold">全局点击率 (CTR)</div><div className="text-2xl font-black mt-1 text-[var(--color-primary)]">14.2%</div></div>
        <div className="p-4 border rounded-xl"><div className="text-xs text-gray-500 font-bold">加购转化率</div><div className="text-2xl font-black mt-1">8.5%</div></div>
        <div className="p-4 border rounded-xl"><div className="text-xs text-gray-500 font-bold">复购指标 (30天)</div><div className="text-2xl font-black mt-1 text-blue-600">41.1%</div></div>
     </div>
     <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl text-center text-gray-500 mt-6">
        <h3 className="font-bold text-gray-700">场景漏斗与临期挽救贡献大盘走势</h3>
        <p className="mt-2 text-sm text-gray-400">对接数据清洗接口: GET /admin/recommend-performance/funnel</p>
     </div>
   </div>)
}
