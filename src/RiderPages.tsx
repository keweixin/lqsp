import { MapPin, Navigation, Clock, CheckCircle, Package } from 'lucide-react';
import { useEffect } from 'react';

export function RiderTasks() {
  useEffect(() => {
    // 模拟每30秒上传定位的心跳接口
    const timer = setInterval(() => {
       console.log('[Heartbeat] POST /rider/location => 坐标: lat, lng上报成功');
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-6 h-full">
      <div className="bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center relative">
        <div className="text-xl font-bold text-gray-500 bg-white px-6 py-3 rounded-xl shadow-sm z-10 flex items-center gap-3">
          <MapPin size={24} className="text-[var(--color-primary)]" />
          <span>LBS 实时订单分布雷达 (开发中)</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="text-[var(--color-warning)]"/> 最新可接订单</h3>
        {[1, 2].map(i => (
          <div key={i} className="card p-5 border-l-4 border-l-[var(--color-info)]">
            <div className="flex justify-between items-start mb-4">
              <span className="font-bold text-sm bg-[var(--color-info)]/10 text-[var(--color-info)] px-2 py-0.5 rounded">¥ 7.50</span>
              <span className="text-xs text-gray-400">{i}分钟前</span>
            </div>
            
            <div className="relative pl-6 mb-6">
              <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gray-200"></div>
              
              <div className="mb-4 relative">
                 <div className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white bg-blue-500"></div>
                 <div className="text-sm font-bold text-gray-800">取：阳光临期超市</div>
              </div>
              
              <div className="relative">
                 <div className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white bg-[var(--color-primary)]"></div>
                 <div className="text-sm font-bold text-gray-800">送：天朗嘉园 5号楼</div>
              </div>
            </div>

            <button className="w-full btn bg-gray-900 text-white hover:bg-black py-3">抢单接收</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RiderCurrent() {
  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col gap-6">
      <div className="bg-[var(--color-primary)] rounded-2xl text-white p-6 shadow-lg relative">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm mb-1 opacity-90">当前进行中</div>
            <div className="text-3xl font-black tracking-tight">前往取餐</div>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Navigation size={32} className="text-white" />
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="font-bold text-lg mb-6 border-b border-gray-100 pb-4">任务节点</h3>
        <div className="space-y-8 pl-2">
           <div className="flex items-start gap-4">
             <div className="w-6 h-6 mt-1 rounded-full border-4 border-[var(--color-primary)] bg-white flex items-center justify-center"></div>
             <div>
               <div className="font-bold text-lg text-[var(--color-primary)]">至 [阳光临期超市] 取餐</div>
               <button className="mt-4 px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold">已到店确认取餐</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export function RiderHistory() {
  return (
    <div className="card max-w-4xl mx-auto">
       <h2 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4">历史履约</h2>
       <div className="space-y-4">
         {[1, 2].map(i => (
           <div key={i} className="flex justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-[var(--color-success)]/10 text-[var(--color-success)] rounded-full flex items-center justify-center"><Package size={24}/></div>
               <div>
                 <div className="font-bold text-sm text-gray-800">#98{i} 阳光超市订单</div>
               </div>
             </div>
             <div className="text-right">
                <div className="font-bold text-lg">+ ¥6.50</div>
             </div>
           </div>
         ))}
       </div>
    </div>
  )
}

export function RiderProfile() {
  return (
    <div className="card max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-serif font-bold mb-8 text-[#2B2D28] border-b border-[#EAE8E1] pb-4">档案与参数设置</h2>
      
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('骑士档案信息已更新'); }}>
        <div className="flex items-center gap-6 mb-8">
           <div className="w-20 h-20 bg-[#FDFCF8] border border-[#EAE8E1] rounded-full flex items-center justify-center font-bold text-3xl text-[var(--color-primary)] shadow-sm">王</div>
           <div>
             <div className="text-xl font-bold text-[#2B2D28]">王建国</div>
             <div className="text-xs text-white font-medium bg-[#D87A5D] px-3 py-1 rounded-full inline-block mt-1 shadow-sm">Lv.3 城市穿梭者</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">真实身份验证</label>
            <input type="text" defaultValue="王建国" className="auth-input bg-[#F3EFE9]" readOnly title="若需更改姓名，请联系平台客服重新实名认证"/>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">接单联系电话</label>
            <input type="tel" defaultValue="13600136000" className="auth-input" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">主要交通工具</label>
            <select className="auth-input appearance-none bg-white" defaultValue="ebike">
              <option value="ebike">电动自行车 (支持中近程)</option>
              <option value="motor">摩托车 (支持中远程快速)</option>
              <option value="car">厢式货车 (支持大批量)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#646A58] mb-2">常驻接单商圈</label>
            <select className="auth-input appearance-none bg-white" defaultValue="high-tech">
              <option value="high-tech">高新区及周边3km</option>
              <option value="downtown">市中心商圈主城</option>
              <option value="university">大学城片区</option>
            </select>
          </div>
        </div>

        <div>
           <label className="block text-sm font-bold text-[#646A58] mb-2">紧急救援联系人 (姓名与电话)</label>
           <input type="text" defaultValue="王燕 13712345678" className="auth-input" placeholder="将用于重大安全预警情况"/>
        </div>

        <div className="pt-6 mt-6 border-t border-[#EAE8E1] flex justify-end">
           <button type="submit" className="btn btn-primary px-10 shadow-md">保存并应用最新调度参数</button>
        </div>
      </form>
    </div>
  )
}
