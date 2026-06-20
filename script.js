// Database Menu Resmi Angkringan K-Lounge
const menuData = {
  // === 🍡 KATEGORI: SATEAN ===
  "1": { "nama": "Sate Usus", "harga": 2000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },
  "2": { "nama": "Sate Telor Puyuh", "harga": 2500, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },
  "3": { "nama": "Sate Kulit", "harga": 2500, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },
  "4": { "nama": "Sate Ati Ampela", "harga": 2500, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },
  "5": { "nama": "Sate Ceker", "harga": 2500, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },
  "6": { "nama": "Sate Kepala Ayam", "harga": 2500, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },
  "7": { "nama": "Sate Tempe Bakar", "harga": 2000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },
  "8": { "nama": "Sate Jando", "harga": 3000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "satean" },

  // === 🐟 KATEGORI: SEAFOOD BAKAR ===
  "9": { "nama": "Sosis Bakar", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "seafood bakar" },
  "10": { "nama": "Kornet Bakar", "harga": 2500, "diskon_rp": 0, "diskon_persen": 0, "kategori": "seafood bakar" },
  "11": { "nama": "Fish Roll Bakar", "harga": 2500, "diskon_rp": 0, "diskon_persen": 0, "kategori": "seafood bakar" },
  "12": { "nama": "Baso Bakar", "harga": 2000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "seafood bakar" },

  // === ☕ KATEGORI: KOPI SIGNATURE ===
  "13": { "nama": "Cappuccino (Hot)", "harga": 13000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "14": { "nama": "Cappuccino (Ice)", "harga": 15000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "15": { "nama": "Americano (Hot)", "harga": 8000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "16": { "nama": "Americano (Ice)", "harga": 10000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "17": { "nama": "Spanish Latte (Hot)", "harga": 13000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "18": { "nama": "Cappuccino Cheese Latte (Hot)", "harga": 13000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "19": { "nama": "Cappuccino Cheese Latte (Ice)", "harga": 15000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "20": { "nama": "Coffee Latte (Hot)", "harga": 13000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "21": { "nama": "Vietnam Drip (Hot)", "harga": 13000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "22": { "nama": "Tubruk K-Lounge (Hot)", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "23": { "nama": "Kopi Rempah (Hot)", "harga": 8000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "24": { "nama": "Es Kopi Susu Gula Aren", "harga": 15000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },
  "25": { "nama": "v60 (Hot)", "harga": 28000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "kopi signature" },

  // === 🍹 KATEGORI: NON KOPI ===
  "26": { "nama": "Cokelat Susu (Ice)", "harga": 15000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "27": { "nama": "Cokelat Panas (Hot)", "harga": 10000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "28": { "nama": "Matcha Latte (Hot)", "harga": 13000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "29": { "nama": "Matcha Latte (Ice)", "harga": 15000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "30": { "nama": "Teh Manis (Hot)", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "31": { "nama": "Teh Manis (Ice)", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "32": { "nama": "Nutrisari Jeruk (Hot)", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "33": { "nama": "Nutrisari Jeruk (Ice)", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "34": { "nama": "Lemon Tea (Hot)", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" },
  "35": { "nama": "Lemon Tea (Ice)", "harga": 5000, "diskon_rp": 0, "diskon_persen": 0, "kategori": "non kopi" }
};

// Data List Kategori Utama
const listKategori = [
    { "id": "satean", "nama": "Sate Satean", "icon": "🍡" },
    { "id": "seafood bakar", "nama": "Seafood Bakar", "icon": "🐟" },
    { "id": "kopi signature", "nama": "Kopi Signature", "icon": "☕" },
    { "id": "non kopi", "nama": "Non Kopi", "icon": "🍹" }
];

let keranjang = {};
let statusHalaman = "kategori"; // Bisa berstatus: 'kategori' atau 'menu_makanan'
let kategoriTerpilih = "";

// Fungsi Utama: Mengatur apa yang harus digambar di layar
function inisialisasiTampilan() {
    const container = document.getElementById('menu-container');
    const btnBack = document.getElementById('btn-back');
    const viewTitle = document.getElementById('view-title');
    container.innerHTML = '';

    if (statusHalaman === "kategori") {
        // 1. TAMPILKAN DAFTAR KATEGORI UTAMA (Awal Buka)
        btnBack.style.display = 'none';
        viewTitle.innerText = '📁 Pilih Kategori Utama';
        
        listKategori.forEach(kat => {
            container.innerHTML += `
                <div class="menu-card category-card" onclick="masukKeMenu('${kat.id}', '${kat.nama}')">
                    <span class="category-icon">${kat.icon}</span>
                    <span>${kat.nama}</span>
                </div>
            `;
        });
    } else {
        // 2. TAMPILKAN DAFTAR MENU DI DALAM KATEGORI YANG DIKLIK
        btnBack.style.display = 'block';
        viewTitle.innerText = `📋 Menu > ${kategoriTerpilih}`;

        for (let id in menuData) {
            let item = menuData[id];
            if (item.kategori !== kategoriTerpilih.toLowerCase() && item.kategori !== kategoriTerpilih) {
                if (!(kategoriTerpilih === "Sate Satean" && item.kategori === "satean") &&
                    !(kategoriTerpilih === "Seafood Bakar" && item.kategori === "seafood bakar") &&
                    !(kategoriTerpilih === "Kopi Signature" && item.kategori === "kopi signature") &&
                    !(kategoriTerpilih === "Non Kopi" && item.kategori === "non kopi")) {
                    continue;
                }
            }

            let infoDiskon = '';
            if (item.diskon_rp > 0) infoDiskon = `<span class="badge-diskon">-Rp ${item.diskon_rp.toLocaleString()}</span>`;
            else if (item.diskon_persen > 0) infoDiskon = `<span class="badge-diskon">-${item.diskon_persen}%</span>`;

            container.innerHTML += `
                <div class="menu-card" onclick="tambahKeKeranjang('${id}')">
                    <h3>${item.nama}</h3>
                    <p class="price">Rp ${item.harga.toLocaleString()}</p>
                    ${infoDiskon}
                </div>
            `;
        }
    }
}

function masukKeMenu(idKategori, namaKategori) {
    statusHalaman = "menu_makanan";
    kategoriTerpilih = namaKategori;
    inisialisasiTampilan();
}

function kembaliKeKategori() {
    statusHalaman = "kategori";
    kategoriTerpilih = "";
    inisialisasiTampilan();
}

function tambahKeKeranjang(id) {
    if (keranjang[id]) {
        keranjang[id].qty += 1;
    } else {
        keranjang[id] = { ...menuData[id], qty: 1 };
    }
    updateKeranjang();
}

function ubahQty(id, perubahan) {
    if (!keranjang[id]) return;
    keranjang[id].qty += perubahan;
    if (keranjang[id].qty <= 0) {
        delete keranjang[id];
    }
    updateKeranjang();
}

function updateKeranjang() {
    const container = document.getElementById('cart-container');
    if (Object.keys(keranjang).length === 0) {
        container.innerHTML = '<p class="empty-cart">Keranjang masih kosong.</p>';
        document.getElementById('total-kotor').innerText = 'Rp0';
        document.getElementById('total-diskon').innerText = 'Rp0';
        document.getElementById('total-netto').innerText = 'Rp0';
        return;
    }

    container.innerHTML = '';
    let totalKotor = 0;
    let totalDiskon = 0;

    for (let id in keranjang) {
        let item = keranjang[id];
        let potonganPerPcs = 0;
        if (item.diskon_rp > 0) potonganPerPcs = item.diskon_rp;
        else if (item.diskon_persen > 0) potonganPerPcs = Math.floor(item.harga * (item.diskon_persen / 100));

        totalKotor += (item.harga * item.qty);
        totalDiskon += (potonganPerPcs * item.qty);

        container.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.nama}</strong><br>
                    <small>${item.qty} x Rp ${item.harga.toLocaleString()}</small>
                </div>
                <div class="cart-item-actions">
                    <button onclick="ubahQty('${id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="ubahQty('${id}', 1)">+</button>
                </div>
            </div>
        `;
    }

    let totalNetto = totalKotor - totalDiskon;
    document.getElementById('total-kotor').innerText = `Rp ${totalKotor.toLocaleString()}`;
    document.getElementById('total-diskon').innerText = `-Rp ${totalDiskon.toLocaleString()}`;
    document.getElementById('total-netto').innerText = `Rp ${totalNetto.toLocaleString()}`;
}

function prosesCheckout() {
    if (Object.keys(keranjang).length === 0) {
        alert('Keranjang masih kosong!');
        return;
    }

    const namaKasir = document.getElementById('nama-kasir').value || 'Deden';
    const waktu = new Date().toLocaleString('id-ID');
    const noNota = 'REG-' + Math.floor(100000 + Math.random() * 900000);

    document.getElementById('nota-id').innerText = noNota;
    document.getElementById('nota-kasir').innerText = namaKasir;
    document.getElementById('nota-tanggal').innerText = waktu;

    const itemsContainer = document.getElementById('nota-items-container');
    itemsContainer.innerHTML = '';

    let totalKotor = 0;
    let totalDiskon = 0;

    for (let id in keranjang) {
        let item = keranjang[id];
        let potonganPerPcs = 0;
        if (item.diskon_rp > 0) potonganPerPcs = item.diskon_rp;
        else if (item.diskon_persen > 0) potonganPerPcs = Math.floor(item.harga * (item.diskon_persen / 100));

        let subtotalItem = item.harga * item.qty;
        let totalPotonganItem = potonganPerPcs * item.qty;

        totalKotor += subtotalItem;
        totalDiskon += totalPotonganItem;

        let diskonTeks = '';
        if (totalPotonganItem > 0) {
            diskonTeks = `<div class="nota-line" style="color: green;"><span>   (Potongan Harga)</span><span>-Rp ${totalPotonganItem.toLocaleString()}</span></div>`;
        }

        itemsContainer.innerHTML += `
            <p style="margin: 4px 0 0 0;">${item.nama}</p>
            <div class="nota-line">
                <span>   ${item.qty} x Rp ${item.harga.toLocaleString()}</span>
                <span>Rp ${subtotalItem.toLocaleString()}</span>
            </div>
            ${diskonTeks}
        `;
    }

    let totalNetto = totalKotor - totalDiskon;
    document.getElementById('nota-total-kotor').innerText = `Rp ${totalKotor.toLocaleString()}`;
    document.getElementById('nota-total-diskon').innerText = `-Rp ${totalDiskon.toLocaleString()}`;
    document.getElementById('nota-total-netto').innerText = `Rp ${totalNetto.toLocaleString()}`;

    document.getElementById('nota-modal').style.display = 'flex';
}

function tutupModal() {
    document.getElementById('nota-modal').style.display = 'none';
    keranjang = {};
    updateKeranjang();
    kembaliKeKategori(); // Otomatis balik ke menu awal kategori setelah checkout
}

// Menjalankan fungsi render awal kategori saat web dibuka
window.onload = inisialisasiTampilan;