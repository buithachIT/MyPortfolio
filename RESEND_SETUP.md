# Resend Setup Guide

Để form contact có thể gửi email về `buithach.it@gmail.com`, bạn cần setup Resend:

## 1. Đăng ký Resend

1. Truy cập [Resend](https://resend.com/)
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

## 2. Tạo API Key

1. Vào **API Keys** trong dashboard
2. Click **Create API Key**
3. Đặt tên (ví dụ: "Portfolio Contact")
4. Copy **API Key**

## 3. Cấu hình Domain (Optional)

Nếu muốn gửi từ domain riêng:

1. Vào **Domains**
2. Thêm domain của bạn
3. Cấu hình DNS records
4. Verify domain

## 4. Cập nhật Environment Variables

Tạo file `.env.local` trong root project:

```env
RESEND_API_KEY=re_your_api_key_here
```

## 5. Cập nhật From Email

Trong file `src/app/api/send/route.ts`, thay đổi:

```typescript
from: 'Portfolio Contact <noreply@yourdomain.com>',
```

Thành:

```typescript
from: 'Portfolio Contact <onboarding@resend.dev>', // Dùng email mặc định
```

Hoặc nếu có domain riêng:

```typescript
from: 'Portfolio Contact <contact@yourdomain.com>',
```

## 6. Test

1. Chạy `npm run dev`
2. Vào trang Contact
3. Điền form và gửi
4. Kiểm tra email `buithach.it@gmail.com`

## Lưu ý

- Resend miễn phí cho 3,000 emails/tháng
- Có thể upgrade để tăng giới hạn
- Email template có thể tùy chỉnh trong code
- Có thể thêm validation và spam protection

## Security

- Không commit API key vào Git
- Sử dụng environment variables
- Thêm rate limiting nếu cần
- Validate input data

## Troubleshooting

### Lỗi "Invalid API Key"

- Kiểm tra API key trong `.env.local`
- Restart development server

### Lỗi "Domain not verified"

- Dùng email mặc định `onboarding@resend.dev`
- Hoặc verify domain trong Resend dashboard

### Email không nhận được

- Kiểm tra spam folder
- Kiểm tra console logs
- Verify API key permissions
