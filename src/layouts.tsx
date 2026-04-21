import { Outlet, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { Home, Compass, ShoppingCart, FileText, User as UserIcon, Store, Package, Settings, Bell, LayoutDashboard, Truck, ScrollText, Users, ArrowRightLeft, ListTodo } from 'lucide-react';
import { motion } from 'motion/react';

function SidebarItem({ to, icon: Icon, baseIconSize = 24 }: { to: string, icon: any, baseIconSize?: number }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to) || location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={clsx(
        "w-12 h-12 rounded-xl mb-5 flex items-center justify-center cursor-pointer transition-all duration-300 relative group", 
        isActive ? "text-[var(--color-primary)] shadow-sm" : "text-[var(--color-muted)] hover:bg-[#f0f0f0]"
      )}
    >
      {isActive && (
        <motion.div layoutId="sidebar-active" className="absolute inset-0 bg-green-50 border border-green-100 rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }}/>
      )}
      <Icon size={baseIconSize} className={clsx("relative z-10 transition-transform duration-300", isActive && "scale-110")} />
    </Link>
  );
}

function SidebarExpandedItem({ to, icon: Icon, label }: { to: string, icon: any, label: string }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  
  return (
    <Link 
      to={to} 
      className={clsx(
        "w-full px-4 py-3 rounded-xl mb-2 flex items-center cursor-pointer transition-all duration-300 relative overflow-hidden group", 
        isActive ? "text-[var(--color-primary)] font-bold text-base" : "text-[var(--color-text-main)] hover:bg-[#f0f0f0]"
      )}
    >
      {isActive && (
        <motion.div layoutId="expanded-active-bg" className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100/50 border border-green-100 rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
      )}
      <Icon size={20} className={clsx("mr-3 relative z-10 transition-transform duration-300", isActive && "scale-110")} />
      <span className="tracking-wide relative z-10">{label}</span>
    </Link>
  );
}

// -------------------------------------------------------------
// USER LAYOUT - Humanized Top Navigation Bar
// -------------------------------------------------------------
function TopNavItem({ to, label, icon: Icon }: { to: string, label: string, icon: any }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to) || location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={clsx(
        "relative px-4 py-2 flex items-center gap-2 transition-all duration-300 font-medium rounded-full",
        isActive ? "text-white" : "text-[#646A58] hover:text-[#2B2D28] hover:bg-[#EAE8E1]/50"
      )}
    >
      {isActive && (
         <motion.div 
           layoutId="topnav-active-bg" 
           className="absolute inset-0 bg-[var(--color-primary)] rounded-full -z-10 shadow-[0_4px_12px_rgba(61,90,65,0.25)]" 
           transition={{ type: "spring", stiffness: 400, damping: 30 }}
         />
      )}
      <Icon size={18} className={clsx("relative z-10", isActive && "text-white")} />
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

export function UserLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[var(--color-bg)] font-sans">
      {/* Top Navigation Bar */}
      <header className="h-20 bg-[#FDFCF8]/90 backdrop-blur-xl border-b border-[#EAE8E1] flex items-center justify-between px-8 sticky top-0 z-50 shadow-sm">
        
        {/* Logo Area */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-3xl font-serif font-bold text-[var(--color-primary)] italic tracking-tight">RescueFood</Link>
          
          <div className="hidden lg:flex items-center bg-white border border-[#EAE8E1] rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="text-gray-400 mr-2 border rounded-full px-2 py-0.5 text-xs">Search</span>
            <input type="text" placeholder="寻找附近的特惠美食..." className="bg-transparent outline-none w-64 text-sm text-[#2B2D28] placeholder:text-[#848A78]" />
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F3EFE9] p-1 rounded-full border border-[#EAE8E1]">
          <TopNavItem to="/u/home" label="首页" icon={Home} />
          <TopNavItem to="/u/recommend" label="探索发现" icon={Compass} />
          <TopNavItem to="/u/orders" label="我的订单" icon={FileText} />
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-4 py-2 border border-[var(--color-primary)]/10 rounded-full hover:bg-[var(--color-primary)]/10 cursor-pointer transition-colors">
            <UserIcon size={16} />
            <span>阳光社区 3号楼</span>
          </div>
          
          <Link to="/u/cart" className="relative p-2.5 text-[#2B2D28] hover:bg-[#EAE8E1] rounded-full transition-colors group">
            <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[var(--color-secondary)] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#FDFCF8]">3</span>
          </Link>
          
          <Link to="/u/profile" className="w-10 h-10 bg-[#EAE2D6] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-lg hover:shadow-md transition-shadow focus:outline-none">
            李
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-8 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}

// 220px expanded sidebar for Merchants and Admins on Web
export function BusinessLayout({ role, title }: { role: string, title: string }) {
  return (
    <div className="flex w-full h-screen bg-[var(--color-bg)] overflow-hidden">
      <aside className="w-[240px] bg-white border-r border-gray-200 flex flex-col py-6 shrink-0 z-10 shadow-[var(--shadow-card)]">
        <div className="px-6 mb-8 flex items-center">
          <div className="w-8 h-8 font-bold bg-gray-900 text-white flex items-center justify-center rounded-lg mr-3 shadow-md">
            {role === 'merchant' ? 'M' : role === 'admin' ? 'A' : 'R'}
          </div>
          <span className="text-lg font-bold text-[var(--color-text-main)] truncate">{title}</span>
        </div>
        <nav className="flex-1 px-4 overflow-y-auto">
          {role === 'merchant' && (
            <>
              <div className="text-[10px] font-bold text-gray-400 mb-2 mt-2 px-3 uppercase tracking-widest">业务经营</div>
              <SidebarExpandedItem to="/m/home" icon={Store} label="工作台" />
              <SidebarExpandedItem to="/m/batches" icon={Package} label="批次管理" />
              <SidebarExpandedItem to="/m/orders" icon={FileText} label="订单协同" />
              <div className="text-[10px] font-bold text-gray-400 mb-2 mt-6 px-3 uppercase tracking-widest">货架规划</div>
              <SidebarExpandedItem to="/m/products" icon={Package} label="商品库" />
              <SidebarExpandedItem to="/m/packages" icon={Compass} label="套餐映射" />
              <div className="text-[10px] font-bold text-gray-400 mb-2 mt-6 px-3 uppercase tracking-widest">门店设置</div>
              <SidebarExpandedItem to="/m/settings" icon={Settings} label="基础设置" />
            </>
          )}
          {role === 'admin' && (
            <>
               <div className="text-[10px] font-bold text-gray-400 mb-2 mt-2 px-3 uppercase tracking-widest">平台监控</div>
               <SidebarExpandedItem to="/admin/home" icon={LayoutDashboard} label="平台总览" />
               <SidebarExpandedItem to="/admin/merchants" icon={Store} label="商家审核" />
               <SidebarExpandedItem to="/admin/riders" icon={Truck} label="骑手管理" />
               <SidebarExpandedItem to="/admin/users" icon={Users} label="用户监管" />
               <div className="text-[10px] font-bold text-gray-400 mb-2 mt-6 px-3 uppercase tracking-widest">策略与异常</div>
               <SidebarExpandedItem to="/admin/orders" icon={FileText} label="异常订单风控" />
               <SidebarExpandedItem to="/admin/rules" icon={ScrollText} label="规则配置" />
               <SidebarExpandedItem to="/admin/recommend-performance" icon={LayoutDashboard} label="引擎效果看板" />
               <SidebarExpandedItem to="/admin/reports" icon={FileText} label="统计报表" />
            </>
          )}
          {role === 'rider' && (
            <>
               <SidebarExpandedItem to="/r/tasks" icon={ListTodo} label="待接任务" />
               <SidebarExpandedItem to="/r/current" icon={Truck} label="当前配送" />
               <SidebarExpandedItem to="/r/history" icon={FileText} label="历史履约" />
               <div className="text-[10px] font-bold text-gray-400 mb-2 mt-6 px-3 uppercase tracking-widest">账号管理</div>
               <SidebarExpandedItem to="/r/profile" icon={UserIcon} label="档案与参数" />
            </>
          )}
        </nav>
        <div className="px-4 mt-auto pt-4 border-t border-gray-100">
          <Link to="/login" className="flex items-center w-full px-4 py-3 rounded-xl text-[var(--color-text-sub)] hover:bg-[#f0f0f0] transition-colors">
            <ArrowRightLeft size={20} className="mr-3" />
            <span className="text-sm font-medium">切换身份</span>
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto flex flex-col relative w-full bg-[var(--color-bg)]">
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-50">
          <h2 className="font-medium text-lg text-[var(--color-text-main)] capitalize hidden sm:block">RescueFood 管理后台</h2>
          <div className="flex items-center gap-4">
             {role === 'rider' && (
                <div className="flex items-center gap-2 mr-4 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-success)] shadow-[0_0_8px_var(--color-success)] animate-pulse"></span>
                  <span className="text-sm font-bold text-gray-700">接单中</span>
                  <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in ml-1">
                      <input type="checkbox" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-slate-300 appearance-none cursor-pointer" defaultChecked style={{right: 0, borderColor: 'var(--color-primary)'}} onClick={() => console.log('POST /rider/status')}/>
                      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" style={{backgroundColor: 'var(--color-primary)'}}></label>
                  </div>
                </div>
             )}
             {role === 'admin' && (
                <button className="flex items-center gap-2 text-sm mr-4 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors" onClick={() => { console.log('POST /admin/ops/refresh/*'); alert('策略缓冲池与运营配置已全网刷新生效'); }}>
                   <ScrollText size={14} /> 一键刷新运营缓冲池
                </button>
             )}
             <Link to={`/${role === 'merchant' ? 'm' : role === 'admin' ? 'admin' : 'r'}/notifications`} className="p-2 relative rounded-full hover:bg-gray-100 cursor-pointer">
               <Bell size={20} className="text-[var(--color-text-sub)]" />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-danger)] outline outline-2 outline-white rounded-full"></span>
             </Link>
             <Link to={role === 'merchant' ? '/m/settings' : role === 'rider' ? '/r/profile' : '#'} className="flex items-center gap-2 cursor-pointer pl-4 border-l border-gray-200">
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${role}`} alt="Avatar" className="w-8 h-8 rounded-full bg-gray-100" />
                <span className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors">{role === 'merchant' ? '阳光临期超市' : role === 'rider' ? '王建国' : '系统管理员'}</span>
             </Link>
          </div>
        </header>
        <div className="flex-1 p-8 overflow-y-auto w-full max-w-[1400px] mx-auto hidden-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
