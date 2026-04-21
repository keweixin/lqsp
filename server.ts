import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // ======== MOCK API ROUTES ========
  
  // 3.1 User APIs
  app.get('/api/user/home', (req, res) => {
    res.json({
      merchants: [
        { id: 1, name: '阳光临期超市', distance: '1.2km', tags: ['水果', '乳品'] }
      ],
      batches: [
        { batchId: 1, name: '高蛋白酸奶杯', currentPrice: 7.9, originPrice: 15.0, expireTime: '2026-04-22T00:00', urgencyLevel: 2, batchStatus: 1 }
      ]
    });
  });

  // Example preview order
  app.post('/api/user/orders/preview', (req, res) => {
    res.json({
      merchantId: 1,
      merchantName: "阳光临期超市",
      items: [
        { name: "高蛋白酸奶杯", batchNo: "YGT-20260420-A", quantity: 1, price: "7.90" }
      ],
      productAmount: "7.90",
      deliveryFee: "2.00",
      discountAmount: "0.00",
      payAmount: "9.90",
      reserveMinutes: 15,
      prepareMinutes: 18,
      merchantOpen: true,
      serviceStatus: "可下单"
    });
  });

  // ====== Vite Integration ======
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // For Express 4
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
