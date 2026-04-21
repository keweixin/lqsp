import { MapPin, Battery, Clock, ArrowRightLeft, Store, Compass, Share2, ShoppingCart, Leaf, ChevronRight, User as UserIcon, Tag, CreditCard, Star, PlusCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AnimatedPage, AnimatedItem } from './components/Motion';

// 模拟的埋点记录器
const trackBehavior = (action: string, metadata: any) => {
   console.log(`[Tracking] POST /user/behaviors | ${action}`, metadata);
};

// -------------------------------------------------------------
// Existing User Home
// -------------------------------------------------------------
export function UserHome() {
  return (
    <AnimatedPage className="flex-1 p-10 flex flex-col gap-8 max-w-[1400px] mx-auto w-full overflow-y-auto hidden-scrollbar">
      {/* Header */}
      <AnimatedItem className="flex justify-between items-center w-full">
        <div>
          <h1 className="m-0 text-4xl font-serif font-bold tracking-tight text-[var(--color-primary)]">你好，李华 👋</h1>
          <p className="m-0 mt-2 text-[#848A78] text-sm font-medium tracking-wide">今天参与抢救计划已完成 65%</p>
        </div>
        <div className="flex items-center gap-2 font-bold text-sm bg-white px-5 py-2.5 rounded-full shadow-sm border border-[#EAE8E1] cursor-pointer hover:shadow-md hover:border-[#DCD8CF] transition-all text-[#2B2D28]">
          <MapPin size={18} className="text-[#D87A5D]" />
          <span>阳光社区 3号楼</span>
        </div>
      </AnimatedItem>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 w-full">
        <AnimatedItem className="card recommend-card flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              早餐推荐 • BREAKFAST
            </span>
            <span className="urgency-tag urgency-mid text-xs">推荐指数 98%</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="w-[140px] h-[140px] bg-white rounded-xl flex items-center justify-center border border-[#f0f0f0] shadow-sm shrink-0 overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/seed/yogurt/200/200?blur=1" alt="Yogurt" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <h3 className="m-0 mb-3 text-2xl font-bold text-[#1a1a1a]">高蛋白低卡酸奶杯</h3>
                <p className="m-0 mb-6 text-sm text-[var(--color-muted)] leading-relaxed">
                  配料：纯手工希腊酸奶、有机蓝莓、烘焙燕麦。
                  <br/>富含优质蛋白质，完美契合您的<strong className="text-[var(--color-text-main)] font-semibold border-b-2 border-[#f0f0f0] ml-1">减脂</strong>目标。
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <span className="text-[var(--color-secondary)] font-black text-2xl tracking-tight">¥7.90</span>
                <span className="line-through text-sm text-[var(--color-muted)]">¥12.80</span>
                <Link to="/u/food/1" className="btn btn-primary shadow-sm hover:opacity-90 ml-auto px-6 scale-100 hover:scale-105 active:scale-95 transition-all text-center">
                  立即抢购
                </Link>
              </div>
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem className="card flex flex-col h-full justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h4 className="m-0 text-lg font-bold text-[#1a1a1a]">营养目标看板</h4>
              <Battery size={20} className="text-[var(--color-primary)]" />
            </div>
            <div className="flex flex-col gap-5">
              {[
                { label: '蛋白质', val: 80, percent: '80%', color: 'var(--color-primary)' },
                { label: '碳水', val: 120, percent: '45%', color: '#faad14' },
                { label: '脂肪', val: 25, percent: '30%', color: 'var(--color-danger)' },
              ].map(n => (
                <div key={n.label} className="flex justify-between items-center">
                  <span className="w-12 text-sm font-medium text-gray-600">{n.label}</span>
                  <div className="h-2.5 bg-[#f0f0f0] rounded-full flex-1 mx-4 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: n.percent, background: n.color }}></div>
                  </div>
                  <span className="w-10 text-sm font-bold text-right text-gray-700">{n.val}g</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-[#eee] text-sm text-[var(--color-muted)] flex items-center gap-2">
             <span>偏好设置：<strong className="text-gray-700 font-medium tracking-wide">控糖、无乳糖</strong></span>
          </div>
        </AnimatedItem>
      </div>

      {/* Grid Section */}
      <AnimatedItem className="mt-4">
        <div className="flex justify-between items-center mb-6 px-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-warning)]/10 flex items-center justify-center text-[var(--color-warning)]">
               <Clock size={18} />
            </div>
            <h4 className="m-0 text-2xl font-bold tracking-tight text-[#1a1a1a]">临期抢救站 <span className="text-xl text-[var(--color-warning)] ml-2">限时折扣</span></h4>
          </div>
          <Link to="/u/recommend" className="text-[var(--color-primary)] text-sm font-medium hover:underline flex items-center">查看全部 <ArrowRightLeft size={14} className="ml-1" /></Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 2, img: 'sandwich', title: '全麦鸡胸肉卷', time: '2时后过期', shop: '阳光临期超市', p: '5.00', t: 'high' },
            { id: 3, img: 'salad', title: '田园凯撒沙拉', time: '今日到期', shop: 'GreenLife轻食', p: '9.90', t: 'mid' },
            { id: 4, img: 'milk', title: '巴氏杀菌鲜牛奶', time: '1时后过期', shop: '每日生鲜馆', p: '3.50', t: 'high' },
            { id: 5, img: 'bread', title: '全麦切片吐司', time: '5时后过期', shop: '麦香面包坊', p: '6.80', t: 'mid' }
          ].map((item) => (
            <AnimatedItem key={item.id}>
              <Link to={`/u/food/${item.id}`} onClick={() => trackBehavior('VIEW_ITEM', { id: item.id })} className="card h-full group hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 p-4 border border-[#f5f5f5] block">
                <div className="h-40 bg-[#f9f9f9] rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                  <img src={`https://picsum.photos/seed/${item.img}/300/200`} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold text-white shadow-sm ${item.t === 'high' ? 'bg-[var(--color-danger)]' : 'bg-[var(--color-secondary)]'}`}>
                    {item.time}
                  </div>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-lg font-bold text-[#1a1a1a] truncate">{item.title}</span>
                  <span className="text-sm text-[var(--color-muted)] flex items-center gap-1"><Store size={12}/> {item.shop}</span>
                </div>
                <div className="flex justify-between items-end pt-3 border-t border-[#f5f5f5] mt-auto">
                  <span className="text-[var(--color-secondary)] font-bold text-xl leading-none">¥{item.p}</span>
                  <button className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">＋ 加购</button>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedItem>
    </AnimatedPage>
  );
}

// -------------------------------------------------------------
// User Recommend Grid
// -------------------------------------------------------------
export function UserRecommend() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-8">
      {/* Radar Chart Sidebar Mock */}
      <div className="w-full md:w-[320px] shrink-0">
        <div className="card sticky top-24">
           <h3 className="text-lg font-serif font-bold text-[#2B2D28] mb-4">匹配度雷达图分析</h3>
           <div className="h-64 bg-[#F9F8F6] rounded-xl flex items-center justify-center border border-[#EAE8E1] relative">
              {/* Mocking a SVG radar shape */}
              <div className="absolute inset-0 m-auto w-40 h-40 border border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 m-auto w-30 h-30 border border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 m-auto w-20 h-20 border border-gray-200 rounded-full"></div>
              <svg className="absolute inset-0 m-auto w-40 h-40 text-[var(--color-primary)] opacity-40 fill-current" viewBox="0 0 100 100">
                 <polygon points="50,10 85,35 75,80 25,80 15,35" />
              </svg>
              <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-gray-400">营养 / 距离 / 价格 / 偏好 / 环保</div>
           </div>
           <p className="text-sm text-[#646A58] mt-4">
             根据您的偏好，当前推荐商品池在**低碳减脂**与**极近距离**维度得分异常突出。
           </p>
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Compass className="text-[var(--color-primary)]" /> 膳食推荐池
        </h2>
        
        {['早餐充电舱', '轻食与午餐', '晚间慰藉'].map((section, sIdx) => (
          <div key={sIdx} className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">{section}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2].map(i => (
                <div key={i} className="card p-0 overflow-hidden group">
                  <div className="h-40 relative overflow-hidden">
                    <img src={`https://picsum.photos/seed/meal${sIdx}${i}/400/300`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)]">
                      匹配度 98%
                    </div>
                  </div>
                  <div className="p-5" onClick={() => trackBehavior('CLICK_RECOMMEND', { id: i })}>
                    <h3 className="text-base font-bold mb-1">有机蔬菜荞麦面组合</h3>
                    <p className="text-xs text-[var(--color-muted)] mb-4 leading-relaxed line-clamp-2">基于您近期缺乏膳食纤维的标签，优选由于临期的羽衣甘蓝为您搭配。</p>
                    <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                      <span className="text-lg font-bold text-[var(--color-secondary)]">¥12.50</span>
                      <div className="flex gap-2">
                         <button className="px-2 py-1.5 text-xs text-gray-500 hover:bg-gray-100 rounded-md transition-colors" onClick={(e) => { e.stopPropagation(); alert('已反馈不感兴趣，将优化后续推荐 (POST /user/recommend/dislike)'); }}>
                            不感兴趣
                         </button>
                         <button className="btn btn-primary text-xs py-1.5 px-3 shadow-sm">加入整餐</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Food Detail
// -------------------------------------------------------------
export function FoodDetail() {
  const { id } = useParams();
  
  return (
    <div className="p-8 max-w-[1000px] mx-auto w-full flex flex-col gap-8">
      <div className="flex gap-8 bg-white p-8 rounded-2xl shadow-[var(--shadow-card)]">
         <div className="w-1/2 h-[400px] bg-gray-100 rounded-xl overflow-hidden">
           <img src={`https://picsum.photos/seed/food${id}/800/800`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
         </div>
         <div className="w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold text-[#1a1a1a]">有机减脂全麦包</h1>
                <Share2 className="text-gray-400 cursor-pointer hover:text-gray-800" />
              </div>
              <div className="text-sm text-[var(--color-muted)] flex items-center gap-2 mb-6">
                <Store size={16}/> 阳光临期超市 <span className="w-1 h-1 rounded-full bg-gray-300"></span> 距离 1.2km
              </div>
              
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg flex items-center gap-3 mb-6 font-medium border border-red-200">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </div>
                距离彻底失效 仅剩 1 小时 45 分，极度紧迫，建议立刻抢救！
              </div>
              
              <div className="flex items-end gap-3 mb-8">
                <span className="text-4xl font-black text-[var(--color-secondary)]">¥5.90</span>
                <span className="text-lg line-through text-gray-400 mb-1">¥18.00</span>
                <span className="bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-2 py-1 rounded text-xs font-bold mb-1.5 ml-2">3折</span>
              </div>
              
              <h4 className="font-bold text-gray-800 mb-3">环保贡献值</h4>
              <div className="flex items-center gap-3 text-sm text-[var(--color-success)] bg-[var(--color-success)]/10 px-4 py-2.5 rounded-lg border border-[var(--color-success)]/20">
                <Leaf size={18} /> 购买此单预计可减碳排 1.2kg，奖励 12 环保积分。
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3.5 rounded-xl transition-colors" onClick={() => trackBehavior('FAVORITE', { id })}>加入收藏</button>
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2">
                <ShoppingCart size={18}/> 加入购物车
              </button>
            </div>
         </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Cart
// -------------------------------------------------------------
export function UserCart() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto w-full grid grid-cols-[1fr_350px] gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-2">我的餐盘</h2>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="card flex gap-6 items-center p-4">
            <img src={`https://picsum.photos/seed/cart${i}/100/100`} className="w-24 h-24 rounded-lg object-cover" referrerPolicy="no-referrer" />
            <div className="flex-1">
              <h4 className="text-lg font-bold">每日坚果面包</h4>
              <div className="text-sm text-gray-500 my-1">阳光临期超市</div>
              <div className="text-[var(--color-secondary)] font-bold text-lg mt-2">¥8.50</div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <button className="text-xl font-medium text-gray-500 hover:text-black">-</button>
              <span className="font-bold w-4 text-center">1</span>
              <button className="text-xl font-medium text-[var(--color-primary)]">+</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="card h-fit sticky top-8">
        <h3 className="text-lg font-bold mb-6">订单结算</h3>
        <div className="flex justify-between mb-4 text-sm text-gray-600"><span>商品总计</span><span>¥17.00</span></div>
        <div className="flex justify-between mb-4 text-sm text-[var(--color-success)]"><span>拯救减免</span><span>- ¥28.00</span></div>
        <div className="flex justify-between mb-6 text-sm text-gray-600"><span>配送费</span><span>¥3.00</span></div>
        <div className="border-t border-gray-100 pt-4 mb-6 flex justify-between items-end">
           <span className="font-bold">实付款</span>
           <span className="text-3xl font-black text-[var(--color-secondary)]">¥20.00</span>
        </div>
        <button className="w-full btn btn-primary py-3.5 text-lg shadow-md flex justify-center items-center gap-2">
           <CreditCard size={20} /> 立即支付
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Orders
// -------------------------------------------------------------
export function UserOrders() {
  return (
    <div className="p-8 max-w-[1000px] mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6">履约时间线</h2>
      <div className="flex flex-col gap-6">
        {[
          { id: '1', status: '配送中', shop: '阳光临期超市', color: 'bg-blue-500' },
          { id: '2', status: '已完成', shop: 'GreenLife轻食', color: 'bg-[var(--color-success)]' }
        ].map((o) => (
          <div key={o.id} className="card">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <Store size={18} className="text-gray-400" />
                <span className="font-bold">{o.shop}</span>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full text-white ${o.color}`}>{o.status}</span>
            </div>
            <div className="flex items-start gap-4">
               <img src={`https://picsum.photos/seed/order${o.id}/80/80`} className="w-16 h-16 rounded-lg mt-1" />
               <div className="flex-1">
                 <h4 className="font-medium text-gray-800">高蛋白低卡酸奶杯 等 2 件商品</h4>
                 <p className="text-sm text-gray-500 mt-1 mb-3">下单时间: 2026-04-21 10:30</p>
                 <div className="flex gap-2">
                    {o.status === '已完成' && (
                      <>
                        <button className="text-xs px-3 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 font-medium" onClick={() => alert('已将该订单内商品重新加购！')}>再来一单</button>
                        <button className="text-xs px-3 py-1.5 border border-[#3d5a41] text-[#3d5a41] bg-[#3d5a41]/5 rounded hover:bg-[#3d5a41]/10 font-bold flex items-center gap-1" onClick={() => alert('打开商户/骑手双端星级评价及标签标注面板 \nPOST /user/orders/xxx/review')}>
                          <Star size={12}/> 追评与打分
                        </button>
                      </>
                    )}
                    {o.status === '配送中' && (
                       <button className="text-xs px-3 py-1.5 border border-red-200 text-red-500 hover:bg-red-50 rounded" onClick={() => alert('尝试中途撤单或联系客服介入')}>取消 / 退款</button>
                    )}
                    <button className="text-xs px-3 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">查看详情</button>
                 </div>
               </div>
               <div className="text-lg font-bold text-[var(--color-secondary)]">¥14.50</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Favorites
// -------------------------------------------------------------
export function UserFavorites() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">我的收藏区</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card text-center p-8 border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] cursor-pointer transition-colors max-h-[300px]">
          <PlusCircle size={32} className="mb-2" />
          <span>探索更多临期好物</span>
        </div>
        <div className="card p-4 border border-[#f5f5f5]">
           <img src="https://picsum.photos/seed/salad/300/200" className="w-full h-40 object-cover rounded-xl mb-4" referrerPolicy="no-referrer" />
           <div className="font-bold text-lg mb-1 truncate">田园凯撒沙拉</div>
           <div className="text-[var(--color-secondary)] font-bold text-xl mb-3">¥9.90</div>
           <button className="w-full text-sm bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500 py-2 rounded">取消收藏</button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Profile
// -------------------------------------------------------------
export function UserProfile() {
  return (
    <div className="p-4 sm:p-8 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
      <div className="card text-center flex flex-col items-center py-10 h-fit">
         <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
           <UserIcon size={40} className="text-gray-400" />
         </div>
         <h2 className="text-xl font-bold mb-1">李华</h2>
         <p className="text-sm text-gray-500 mb-6">RescueFood Lv.4 拯救者</p>
         
         <div className="w-full grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
            <div>
              <div className="text-sm text-gray-500">总减碳排</div>
              <div className="text-xl font-bold text-[var(--color-success)] mt-1">128 kg</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">环保积分</div>
              <div className="text-xl font-bold text-[var(--color-primary)] mt-1">3,450</div>
            </div>
         </div>
      </div>
      
      <div className="flex flex-col gap-6">
        <div className="card">
          <h2 className="text-2xl font-serif font-bold mb-6 text-[#2B2D28] border-b border-[#EAE8E1] pb-4">档案与定制约束</h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('档案信息更新成功'); }}>
             <h3 className="text-lg font-bold text-[#646A58] mb-2 border-b border-gray-50 pb-2">基础生理参数</h3>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#646A58] mb-2">昵称</label>
                  <input type="text" defaultValue="李华" className="auth-input" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#646A58] mb-2">性别</label>
                  <select className="auth-input appearance-none bg-white">
                    <option>女</option><option>男</option><option>保密</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#646A58] mb-2">年龄</label>
                  <input type="number" defaultValue="25" className="auth-input" />
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#646A58] mb-2">身高 (cm)</label>
                  <input type="number" defaultValue="165" className="auth-input" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#646A58] mb-2">体重 (kg)</label>
                  <input type="number" defaultValue="55" className="auth-input" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#646A58] mb-2">日常活动水平</label>
                  <select className="auth-input appearance-none bg-white" defaultValue="medium">
                    <option value="low">较低 (久坐办公)</option>
                    <option value="medium">中等 (日常走动较多)</option>
                    <option value="high">较高 (经常重度锻炼)</option>
                  </select>
                </div>
             </div>

             <h3 className="text-lg font-bold text-[#646A58] pt-4 mb-2 border-b border-gray-50 pb-2">购物与履约设定</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#646A58] mb-2">常驻默认收货地址</label>
                  <input type="text" defaultValue="阳光社区 3号楼 402室" className="auth-input" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                   <div>
                     <label className="block text-sm font-bold text-[#646A58] mb-2">单餐预算范围 (¥)</label>
                     <input type="number" defaultValue="20" className="auth-input" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-[#646A58] mb-2">可接受配送半径 (km)</label>
                     <input type="number" defaultValue="3" step="0.5" className="auth-input" />
                   </div>
                </div>
             </div>
             
             <div className="pt-4 border-t border-[#EAE8E1]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#2B2D28]"><Tag size={18} className="text-[#D87A5D]" /> 细粒度饮食偏好（智能机组参考依据）</h3>
                
                <label className="block text-sm font-bold text-[#646A58] mb-2">口味与耐受度</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <select className="auth-input appearance-none bg-white" defaultValue="normal">
                    <option value="none">无乳糖不耐</option>
                    <option value="light">轻度乳糖不耐受</option>
                    <option value="heavy">重度乳糖不耐受</option>
                  </select>
                  <select className="auth-input appearance-none bg-white" defaultValue="mid">
                    <option value="none">完全不吃辣</option>
                    <option value="low">微辣</option>
                    <option value="mid">中辣</option>
                    <option value="high">重辣</option>
                  </select>
                </div>

                <label className="block text-sm font-bold text-[#646A58] mb-2 mt-4">正向饮食倾心标签库</label>
                <div className="flex flex-wrap gap-2 mb-4">
                   {['控糖', '无乳糖', '高蛋白', '低脂肪', '生酮', '纯素食', '+ 添加新偏好'].map((tag, i) => (
                      <div key={i} className={`px-4 py-2 border rounded-full text-xs font-bold cursor-pointer transition-colors ${i < 2 ? 'bg-[#3d5a41]/10 border-[#3d5a41]/20 text-[#3d5a41]' : i===6 ? 'bg-gray-100 border-dashed text-gray-400' :'bg-[#FDFCF8] border-[#EAE8E1] text-[#646A58] hover:border-[#DCD8CF]'}`}>
                         {tag}
                      </div>
                   ))}
                </div>

                <label className="block text-sm font-bold text-[#646A58] mb-2 mt-4">过敏原及防推黑名单（硬限制）</label>
                <div className="flex flex-wrap gap-2 mb-2">
                   {['芒果过敏', '坚果回避', '香菜抗拒', '+ 标注拒绝食材'].map((tag, i) => (
                      <div key={i} className={`px-4 py-2 border rounded-full text-xs font-bold cursor-pointer transition-colors ${i < 3 ? 'bg-red-50 border-red-200 text-red-600' : 'bg-gray-100 border-dashed text-gray-400'}`}>
                         {tag}
                      </div>
                   ))}
                </div>
             </div>

             <div className="pt-6 mt-6 border-t border-[#EAE8E1] flex justify-end gap-4">
                <button type="submit" className="btn btn-primary px-8">保存全局档案</button>
             </div>
          </form>
        </div>
      </div>
    </div>
  );
}
