// Hàm trợ giúp để sinh số ngẫu nhiên
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate(birthYear) {
    const month = padZero(getRandomInt(1, 12));
    const day = padZero(getRandomInt(1, 28)); // Lấy đến 28 để tránh vấn đề ngày của tháng 2
    return `${day}/${month}/${birthYear}`; // Năm không cần padZero
}

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}

// Hàm để chọn trường đại học hoặc cao đẳng ngẫu nhiên
function getRandomUniversity(city, universities, colleges) {
    let randomPercentage = getRandomInt(1, 100);
    let universityList = randomPercentage <= 75 ? universities[city] : colleges[city];
    return universityList[Math.floor(Math.random() * universityList.length)];
}

// Dữ liệu mẫu cho tên nam và nữ
const maleNames = {
    first: ['Nguyễn', 'Trung', 'Quang', 'Hoàng', 'Minh', 'Đức', 'Anh', 'Hùng', 'Hải', 'Tiến', 'Khánh', 'Tuấn', 'Thành', 'Nam', 'Phúc', 'Văn', 
    'Thắng', 'Dương', 'Bình', 'Long', 'Hưng', 'Cường', 'Hà', 'Việt', 'Quốc', 'Đạt', 'Tùng', 'Hòa', 'Trường', 'Phương', 'Tâm', 'Tú', 'Duy', 'Đại', 
    'Xuân', 'Đinh', 'Vinh', 'Hạnh', 'Lê', 'Sơn', 'Thái', 'Quyết', 'Chí', 'Đinh', 'Hiếu', 'Hoài', 'Nhật', 'Lương', 'Viên', 'Quân'],
    middle: ['Văn', 'Đình', 'Quang', 'Khắc','Hữu'],
    last: ['Nguyễn', 'Trần', 'Lê', 'Phạm','Hoàng', 'Huỳnh','Vũ','Võ','Phan','Trương','Bùi','Đặng','Đỗ','Ngô','Hồ','Dương','Đình','Lý']
};

const femaleNames = {
    first: [
        'Hạnh', 'Lan', 'Linh', 'Hương', 'Mai', 'Ánh', 'Ngọc', 'Thu', 'Phương', 'Quỳnh', 'Thảo', 'Trang', 'Hoa', 'Phượng', 'Yến', 'Nga', 'Diễm', 'Oanh', 
        'Tuyết', 'Thanh', 'Vân', 'Bích', 'Thúy', 'Nguyệt', 'Tâm', 'Hà', 'Xuân', 'Ngân', 'Kim', 'Đào', 'Loan', 'Hồng', 'Ngọc', 'Dung', 'Ly', 'Huệ', 'Thủy', 
        'Hằng', 'Bảo', 'Huyền', 'Cẩm', 'Ái', 'Nguyên', 'Thư', 'Hoài', 'Hòa', 'Ngọc', 'Anh', 'Việt', 'Đức'
    ],
    middle: ['Thị', 'Kim', 'Hồng','Thùy'],
    last: ['Nguyễn', 'Trần', 'Lê', 'Phạm','Hoàng', 'Huỳnh','Vũ','Võ','Phan','Trương','Bùi','Đặng','Đỗ','Ngô','Hồ','Dương','Đình','Lý']
};

// Dữ liệu mẫu cho các thành phố và trường đại học, cao đẳng
const cities = ['Hà Nội', 'TP HCM','Đà Nẵng'];
const provinces = [
    "Hà Nội", "Hồ Chí Minh (Sài Gòn)", "Hải Phòng", "Cần Thơ", "Đà Nẵng", "Quy Nhơn", "Nha Trang", "Vũng Tàu", "Hạ Long", "Đồng Hới",
    "Thanh Hóa", "Vinh", "Huế", "Đà Lạt", "Buôn Ma Thuột", "Pleiku", "Kon Tum", "Quảng Ngãi", "Tam Kỳ", "Quảng Nam",
    "Quảng Trị", "Quảng Bình", "Phan Thiết", "Ninh Thuận", "Phan Rang - Tháp Chàm", "Bạc Liêu", "Cà Mau", "Rạch Giá",
    "Long Xuyên", "Cần Giờ", "Sóc Trăng", "Trà Vinh", "Bến Tre", "Vĩnh Long", "Mỹ Tho", "An Giang", "Sa Đéc", "Cao Lãnh",
    "Bà Rịa - Vũng Tàu", "Bình Dương", "Biên Hòa", "Tây Ninh", "Long An", "Cần Thơ", "Vĩnh Long", "Cà Mau", "Sông Cửu Long",
    "Kiên Giang", "Hậu Giang", "Sóc Trăng", "Cà Mau", "Bạc Liêu", "Bến Tre", "Tiền Giang", "Hà Tĩnh", "Nghệ An",
    "Quảng Bình", "Quảng Trị", "Thừa Thiên-Huế", "Quảng Nam", "Quảng Ngãi", "Bình Định", "Phú Yên"
];

const universities = {
    'Hà Nội': ['Đại học Quốc Gia Hà Nội', 'Đại học Bách Khoa Hà Nội', 'Đại học Kinh Tế Quốc Dân', 'Đại học Y Hà Nội', 'Đại học Sư phạm Hà Nội', 
    'Đại học Khoa học Xã hội và Nhân văn Hà Nội', 'Đại học Khoa học Tự nhiên Hà Nội', 'Đại học Luật Hà Nội', 'Đại học Ngoại ngữ - Tin học Hà Nội', 
    'Đại học Sân khấu - Điện ảnh Hà Nội', 'Đại học Sư phạm Âm nhạc Hà Nội', 'Đại học Sư phạm Mỹ thuật Hà Nội', 'Đại học Sư phạm Thể dục Thể thao Hà Nội', 
    'Đại học Giao thông Vận tải Hà Nội', 'Đại học Công nghệ Thông tin Hà Nội', 'Đại học Công nghiệp Hà Nội', 'Đại học Công nghiệp Hà Nội', 
    'Đại học Khoa học Xây dựng Hà Nội', 'Đại học Kiến trúc Hà Nội', 'Đại học Công nghiệp Hóa học Hà Nội', 'Đại học Công nghiệp Hà Nội - Cơ sở TP.HCM', 
    'Đại học Công nghiệp Thực phẩm Hà Nội', 'Đại học Công nghiệp Thủ đức Hà Nội', 'Đại học Xây dựng Hà Nội', 'Đại học Bưu chính Viễn thông Hà Nội', 
    'Đại học Kỹ thuật Quân sự Hà Nội', 'Đại học Sư phạm Kỹ thuật Hà Nội', 'Đại học Kinh tế Công nghiệp Hà Nội', 'Đại học Thể dục Thể thao Hà Nội', 
    'Đại học Công nghệ Thông tin và Truyền thông Hà Nội', 'Đại học Tài chính - Kế toán Hà Nội', 'Đại học Mỏ - Địa chất Hà Nội', 'Đại học Khoa học và Công nghệ Hà Nội', 
    'Đại học Thương mại Hà Nội', 'Đại học Công nghiệp Hà Nội', 'Đại học Thương mại Hà Nội'],

    'TP HCM': ['Đại học Quốc Gia TP HCM', 'Đại học Khoa học Tự nhiên TP HCM', 'Đại học Bách Khoa TP HCM', 'Đại học Y Dược TP HCM', 'Đại học Y Khoa Phạm Ngọc Thạch TP HCM', 
    'Đại học Kinh tế - Luật TP HCM', 'Đại học Kinh tế TP HCM', 'Đại học Khoa học Xã hội và Nhân văn TP HCM', 'Đại học Ngoại ngữ - Tin học TP HCM', 'Đại học Bách khoa TP HCM', 
    'Đại học Sân khấu - Điện ảnh TP HCM', 'Đại học Sư phạm Âm nhạc TP HCM', 'Đại học Sư phạm Mỹ thuật TP HCM', 'Đại học Sư phạm Thể dục Thể thao TP HCM', 
    'Đại học Giao thông Vận tải TP HCM', 'Đại học Công nghệ Thông tin TP HCM', 'Đại học Công nghiệp TP HCM', 'Đại học Công nghiệp TP HCM', 
    'Đại học Khoa học Xây dựng TP HCM', 'Đại học Kiến trúc TP HCM', 'Đại học Công nghiệp Hóa học TP HCM', 'Đại học Công nghiệp Hà Nội - Cơ sở TP HCM', 
    'Đại học Công nghiệp Thực phẩm TP HCM', 'Đại học Công nghiệp Thủ đức TP HCM', 'Đại học Xây dựng TP HCM', 'Đại học Sài Gòn TP HCM', 
    'Đại học Công nghệ Thông tin và Truyền thông TP HCM', 'Đại học Nông Lâm TP HCM', 'Đại học Tài chính - Kế toán TP HCM', 'Đại học Hồng Bàng TP HCM', 
    'Đại học Sư phạm Kỹ thuật TP HCM', 'Đại học Bưu chính Viễn thông TP HCM', 'Đại học Sư phạm TP HCM', 'Đại học Thể dục Thể thao TP HCM', 'Đại học Luật TP HCM', 
    'Đại học Ngân hàng TP HCM', 'Đại học Nguyễn Tất Thành TP HCM', 'Đại học Công nghệ Thực phẩm TP HCM', 'Đại học Kinh tế - Đối ngoại TP HCM'],

    'Đà Nẵng': [ 'Đại học Đà Nẵng', 'Đại học Kinh tế - Luật Đà Nẵng', 'Đại học Khoa học Tự nhiên Đà Nẵng', 'Đại học Sư phạm Đà Nẵng', 'Đại học Ngoại ngữ - Tin học Đà Nẵng',
    'Đại học Bách khoa Đà Nẵng', 'Đại học Sư phạm Kỹ thuật Đà Nẵng', 'Đại học Công nghệ Thông tin Đà Nẵng', 'Đại học Khoa học Xã hội và Nhân văn Đà Nẵng', 
    'Đại học Kinh tế - Đối ngoại Đà Nẵng', 'Đại học Kiến trúc Đà Nẵng', 'Đại học Công nghệ Đà Nẵng', 'Đại học Sân khấu - Điện ảnh Đà Nẵng', 'Đại học Luật Đà Nẵng',
    'Đại học Y Dược Đà Nẵng', 'Đại học Nông Lâm Đà Nẵng', 'Đại học Công nghiệp Đà Nẵng', 'Đại học Quản lý Đà Nẵng', 'Đại học Đông Á Đà Nẵng', 'Đại học Ngoại thương Đà Nẵng',
    'Đại học Sư phạm Thể dục Thể thao Đà Nẵng', 'Đại học Công nghiệp May Đà Nẵng', 'Đại học Duy Tân Đà Nẵng', 'Đại học Luật - Quốc tế Đà Nẵng', 'Đại học Đại Nam Đà Nẵng',
    'Đại học Trường BĐ - ĐT Bà Rịa - Vũng Tàu Đà Nẵng', 'Đại học Công nghiệp Xây dựng Đà Nẵng', 'Đại học Kỹ thuật Đà Nẵng', 'Đại học Nghệ thuật - Điện ảnh Đà Nẵng',
    'Đại học Y Học Cổ Truyền Đà Nẵng', 'Đại học Ngoại thương - Cơ sở Đà Nẵng', 'Đại học Bưu chính Viễn thông - Cơ sở Đà Nẵng', 'Đại học Sư phạm Mỹ thuật Đà Nẵng'
    ]
};

const colleges = {
    'Hà Nội': ['Cao đẳng Kỹ thuật Hà Nội', 'Cao đẳng Nghề Hà Nội', 'Cao đẳng Công nghệ và Kỹ thuật Hà Nội', 'Cao đẳng Công nghiệp Hà Nội', 'Cao đẳng Công nghệ thông tin Hà Nội', 
    'Cao đẳng Kinh tế - Quản trị Hà Nội', 'Cao đẳng Sư phạm và Nghệ thuật Hà Nội', 'Cao đẳng Kinh tế - Du lịch Hà Nội', 'Cao đẳng Nông nghiệp và Phát triển nông thôn Hà Nội', 
    'Cao đẳng Công nghệ Hà Nội', 'Cao đẳng Y tế Hà Nội', 'Cao đẳng Môi trường Hà Nội', 'Cao đẳng Thể dục Thể thao Hà Nội', 'Cao đẳng Sư phạm Tiểu học Hà Nội', 
    'Cao đẳng Ngoại ngữ Hà Nội'],

    'TP HCM': ['Cao đẳng Kinh tế - Kỹ thuật TP HCM', 'Cao đẳng Nghề TP HCM', 'Cao đẳng Công nghệ và Kỹ thuật TP HCM', 'Cao đẳng Công nghiệp TP HCM', 
    'Cao đẳng Công nghệ thông tin TP HCM', 'Cao đẳng Kinh tế - Quản trị TP HCM', 'Cao đẳng Sư phạm và Nghệ thuật TP HCM', 'Cao đẳng Kinh tế - Du lịch TP HCM', 
    'Cao đẳng Nông nghiệp và Phát triển nông thôn TP HCM', 'Cao đẳng Công nghệ TP HCM', 'Cao đẳng Y tế TP HCM', 'Cao đẳng Môi trường TP HCM', 'Cao đẳng Thể dục Thể thao TP HCM', 
    'Cao đẳng Sư phạm Tiểu học TP HCM', 'Cao đẳng Ngoại ngữ TP HCM', 'Cao đẳng Hành chính và Kinh doanh TP HCM', 'Cao đẳng Công nghiệp May TP HCM', 
    'Cao đẳng Công nghiệp Thực phẩm TP HCM', 'Cao đẳng Công nghệ Công trình TP HCM', 'Cao đẳng Sư phạm Mầm non TP HCM'],

    'Đà Nẵng': ['Cao đẳng Kỹ thuật Đà Nẵng', 'Cao đẳng Nghề Đà Nẵng', 'Cao đẳng Công nghệ và Kỹ thuật Đà Nẵng', 'Cao đẳng Công nghiệp Đà Nẵng', 'Cao đẳng Công nghệ thông tin Đà Nẵng', 
    'Cao đẳng Kinh tế - Quản trị Đà Nẵng', 'Cao đẳng Sư phạm và Nghệ thuật Đà Nẵng', 'Cao đẳng Kinh tế - Du lịch Đà Nẵng', 'Cao đẳng Nông nghiệp và Phát triển nông thôn Đà Nẵng', 
    'Cao đẳng Công nghệ Đà Nẵng', 'Cao đẳng Y tế Đà Nẵng', 'Cao đẳng Môi trường Đà Nẵng', 'Cao đẳng Thể dục Thể thao Đà Nẵng', 'Cao đẳng Sư phạm Tiểu học Đà Nẵng', 
    'Cao đẳng Ngoại ngữ Đà Nẵng']
};


function generateRandomProfile(birthYearFrom, birthYearTo) {
    const genderElement = document.getElementById('gender');
    let gender = genderElement.value;
    if (gender === "") {
        gender = Math.random() < 0.4 ? "Nam" : "Nữ"; // 50% cơ hội cho mỗi giới tính
    }
    const names = gender === 'Nam' ? maleNames : femaleNames;
    const lastName = names.last[Math.floor(Math.random() * names.last.length)];
    const middleName = names.middle[Math.floor(Math.random() * names.middle.length)];
    const firstName = names.first[Math.floor(Math.random() * names.first.length)];
    const birthYear = getRandomInt(parseInt(birthYearFrom), parseInt(birthYearTo));
    const city = cities[Math.floor(Math.random() * cities.length)];
    const province = provinces[Math.floor(Math.random() * provinces.length)];

    let profile = {
        name: `${lastName} ${middleName} ${firstName}`,
        gender: gender,
        birthDate: generateRandomDate(birthYear),
        birthPlace: province,
        livingPlace: city,
        university: getRandomUniversity(city, universities, colleges)
    };

    return profile;
}

function displayProfiles(profiles) {
    const tableBody = document.getElementById('profileTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";
    let counter = 1;

    function addProfileToTable(index) {
        if (index < profiles.length) {
            const profile = profiles[index];
            let row = tableBody.insertRow();
            row.insertCell(0).innerHTML = counter++;
            row.insertCell(1).innerHTML = profile.name;
            row.insertCell(2).innerHTML = profile.birthDate;
            row.insertCell(3).innerHTML = profile.gender === "" ? "Tất cả" : profile.gender;
            row.insertCell(4).innerHTML = profile.birthPlace;
            row.insertCell(5).innerHTML = profile.livingPlace;
            row.insertCell(6).innerHTML = profile.university;
            setTimeout(() => addProfileToTable(index + 1), 300); // Đợi 500ms trước khi thêm hồ sơ tiếp theo
        } else {
            alert('Tạo danh sách thành công!'); // Thông báo khi hoàn tất
        }
    }

    addProfileToTable(0);
}

function exportToExcel() {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.table_to_sheet(document.getElementById('profileTable'));
    XLSX.utils.book_append_sheet(wb, ws, 'Profiles');
    XLSX.writeFile(wb, 'DanhSachProfiles.xlsx');
    alert('Xuất file Excel thành công!');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('randomProfileForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const birthYearFrom = document.getElementById('birthYearFrom').value;
        const birthYearTo = document.getElementById('birthYearTo').value;
        const quantity = document.getElementById('quantity').value;
        let profiles = [];
        for (let i = 0; i < quantity; i++) {
            profiles.push(generateRandomProfile(birthYearFrom, birthYearTo));
        }
        displayProfiles(profiles);
    });

    document.getElementById('exportExcel').addEventListener('click', exportToExcel);
});
