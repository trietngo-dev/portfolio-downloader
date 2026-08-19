import { AppItem } from '../types/app';

/**
 * ==============================================================================
 * HƯỚNG DẪN THÊM PHẦN MỀM TỪ GITHUB RELEASES
 * ==============================================================================
 * 
 * 1. Tạo Release trên GitHub:
 *    - Vào repository GitHub của bạn (ví dụ: https://github.com/ngophantriet/ten-tool)
 *    - Chọn "Releases" -> "Draft a new release"
 *    - Nhập Tag (ví dụ: v1.0.0), tiêu đề phiên bản
 *    - Kéo thả file .exe từ máy tính vào khung "Attach binaries by dropping them here..."
 *    - Nhấn "Publish release"
 *    - Chuột phải vào file .exe trong mục Assets vừa tạo -> Chọn "Copy link address"
 * 
 * 2. Cấu trúc đường dẫn download thật có dạng:
 *    https://github.com/ngophantriet/<repo-name>/releases/download/<tag>/<filename>.exe
 * 
 * 3. Lấy mã băm SHA-256 (Checksum) trên Windows (mở PowerShell và gõ):
 *    Get-FileHash -Algorithm SHA256 "duong_dan_den_file.exe"
 * 
 * ==============================================================================
 */

export const APPS_DATA: AppItem[] = [
  /*
  // MẪU CẤU HÌNH 1 ỨNG DỤNG - HÃY BỎ DẤU CHÚ THÍCH (UNCOMMENT) VÀ ĐIỀN THÔNG TIN CỦA BẠN:
  {
    id: 'my-first-app',
    title: 'Tên Phần Mềm Của Bạn',
    tagline: 'Mô tả ngắn gọn công dụng chính của phần mềm',
    version: 'v1.0.0',
    releaseDate: '2026-03-01',
    size: '15.4 MB',
    category: 'Utility', // 'Utility' | 'DevTools' | 'Games' | 'Automation'
    tags: ['C# / .NET 8', 'Portable', 'Windows 10/11'],
    os: 'Windows 10 / 11 (64-bit)',
    downloadUrl: 'https://github.com/ngophantriet/my-first-app/releases/download/v1.0.0/MyFirstApp.exe',
    githubUrl: 'https://github.com/ngophantriet/my-first-app',
    checksumSha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    shortDescription: 'Mô tả chi tiết về cách phần mềm giải quyết công việc...',
    fullDescription: 'Mô tả đầy đủ tất cả thông tin, hướng dẫn cơ bản cho người dùng...',
    features: [
      'Tính năng số 1: Tự động hóa tác vụ',
      'Tính năng số 2: Giao diện trực quan',
      'Tính năng số 3: Hoàn toàn Portable không cần cài đặt'
    ],
    systemRequirements: {
      os: 'Windows 10 / 11',
      ram: '512 MB RAM',
      storage: '20 MB dung lượng trống',
      architecture: 'x64'
    },
    changelog: [
      {
        version: 'v1.0.0',
        date: '2026-03-01',
        notes: ['Phiên bản đầu tiên phát hành chính thức']
      }
    ],
    accentColor: 'coral', // 'coral' | 'blue' | 'yellow' | 'mint' | 'lilac' | 'pink'
    iconType: 'zap',      // 'zap' | 'terminal' | 'palette' | 'shield' | 'game' | 'spark'
    isFeatured: true,
  },
  */
  {
    id: 'teacher-lab',
    title: 'Teacher-Lab - Trợ Lý Sư Phạm 4.0',
    tagline: 'Hệ sinh thái lưu trữ tài liệu, quản lý lịch dạy & trợ lý AI sư phạm toàn diện cho giáo viên',
    version: 'v1.0.0',
    releaseDate: '2026-08-19',
    size: '78.7 MB',
    category: 'Automation', // Thể loại: 'Utility' | 'DevTools' | 'Games' | 'Automation'
    tags: ['Electron', 'React', 'Gemini AI', 'SQLite', 'EdTech', 'Windows 10/11'],
    os: 'Windows 10 / 11 (64-bit)',

    // 👉 Link tải trực tiếp từ GitHub Releases của bạn:
    downloadUrl: 'https://github.com/trietngo-dev/Teacher-LAB/releases/download/v1.0.0/Teacher-Lab.Setup.1.0.0.exe',
    githubUrl: 'https://github.com/trietngo-dev/Teacher-LAB',
    checksumSha256: '9d87f578d0f77d96f131c741e7023ebcffd3193970e8fc388d04562f26e5385f',

    shortDescription: 'Teacher-Lab là phần mềm máy tính cá nhân hoá dành riêng cho giáo viên, tích hợp công nghệ Google Gemini AI để tự động hóa việc soạn giáo án chuẩn Công văn 5512, tạo đề kiểm tra kèm ma trận nhận thức, viết nhận xét học bạ và quản lý thời khóa biểu thông minh.',
    fullDescription: `Teacher-Lab là giải pháp chuyển đổi số sư phạm toàn diện, hoạt động 100% cục bộ trên máy tính cá nhân giúp bảo mật dữ liệu tuyệt đối và không làm nặng máy.

Các phân hệ chính:
1. 📝 Soạn Giáo Án Chuẩn Công Văn 5512/BGDĐT: Tự động biên soạn kế hoạch bài dạy chuẩn 4 hoạt động sư phạm (Khởi động, Hình thành kiến thức, Luyện tập, Vận dụng), tương thích các bộ sách Kết nối tri thức, Cánh diều, Chân trời sáng tạo.
2. 📑 Ngân Hàng Câu Hỏi & Đề Kiểm Tra: Thiết lập ma trận nhận thức 4 cấp độ (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao), tự động sinh trắc nghiệm + tự luận kèm đáp án và hướng dẫn chấm chi tiết.
3. 🧑‍🎓 Trợ Lý Lời Phê Học Bạ: Sinh 3 mẫu nhận xét học sinh tinh tế, khích lệ và chuẩn quy định sư phạm.
4. 🎲 Thư Viện Trò Chơi Khởi Động: Gợi ý các hoạt động 5-10 phút đầu giờ học kèm luật chơi và bộ câu hỏi mẫu.
5. 📁 Kho Tài Liệu Đa Định Dạng: Quản lý Word (.docx), Excel (.xlsx), PDF, hình ảnh, tích hợp xem trước trực tiếp và AI tự động phân loại.
6. 📅 Quản Lý Lịch Giảng Dạy: Thời khóa biểu tuần trực quan, liên kết giáo án trực tiếp vào từng tiết dạy.
7. ⚡ Thang Đo Quota Gemini: Theo dõi trực quan số lượt gọi và lượng token còn lại trong ngày, hỗ trợ nhiều mô hình (Gemini 2.5 Flash, 2.0 Flash, 1.5 Pro).`,

    features: [
      'Chạy độc lập trên Desktop trong một cửa sổ riêng, không cần cài đặt Node.js hay Git',
      'Soạn giáo án chi tiết chuẩn CV 5512/BGDĐT, xuất PDF/In ấn nhanh',
      'Tạo đề thi trắc nghiệm & tự luận theo ma trận nhận thức 4 cấp độ',
      'Trợ lý AI viết lời phê học bạ và nhận xét học sinh tự động',
      'Kho lưu trữ tài liệu đa định dạng (Word, Excel, PDF, Ảnh) kèm xem trước trực tiếp',
      'Quản lý thời khóa biểu tuần chuẩn tiết dạy và liên kết bài giảng',
      'Thang đo hạn mức Quota Gemini AI trực quan theo ngày',
      'Cơ sở dữ liệu SQLite siêu nhẹ, bảo mật dữ liệu cục bộ 100% trên máy'
    ],
    systemRequirements: {
      os: 'Windows 10 / 11 (64-bit)',
      ram: '2 GB RAM (Khuyên dùng 4 GB)',
      storage: '250 MB dung lượng trống',
      architecture: 'x64'
    },
    changelog: [
      {
        version: 'v1.0.0',
        date: '2026-08-19',
        notes: [
          'Phiên bản phát hành chính thức đầu tiên của Teacher-Lab',
          'Tích hợp Google Gemini 2.5 Flash và hệ thống quản lý Quota theo ngày',
          'Hoàn thiện bộ công cụ sư phạm: Soạn giáo án 5512, Tạo đề thi, Lời phê học bạ, Trò chơi khởi động',
          'Hỗ trợ xem trước trực tiếp tệp DOCX, XLSX, PDF, Hình ảnh',
          'Đóng gói bộ cài đặt Windows Setup .exe với biểu tượng icon tùy chỉnh'
        ]
      }
    ],
    accentColor: 'blue', // Màu thẻ: 'coral' | 'blue' | 'yellow' | 'mint' | 'lilac' | 'pink'
    iconType: 'spark',   // Icon: 'zap' | 'terminal' | 'palette' | 'shield' | 'game' | 'spark'
    isFeatured: true,    // Gắn huy hiệu 'Nổi bật'
  }
];
