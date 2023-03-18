const Footer = () => {
  return (
    <section class="text-white md:flex items-start justify-around mx-6 md:px-16 gap-10 lg:mt-32 md:flex-col md:items-start lg:px-20 lg:flex-row lg:justify-between mt-10">
      <div class="text-text-dark font-bold md:w-[100%] lg:w-[50%]">
        <div class="flex justify-start items-center gap-3 mb-5">
          <img src="./images/brand.png" class="" alt="" />
        </div>
        <p class="mb-5 leading-relaxed">
        "Kembangkan keterampilan Anda dengan Suxz. Ribuan kursus tersedia untuk membantu Anda mencapai tujuan pendidikan dan karier Anda. Daftar sekarang dan mulai perjalanan belajar Anda!"
        </p>
        <p class="mb-2 font-bold text-sm">
          Design By Irham Shidiq
        </p>
        <p class="mb-2 font-bold text-sm">Code By Azam Din Abdillah</p>
        <p class="mb-2 font-bold text-sm">Platform By Muhammad Nauval Azhar</p>
      </div>
      <div className="md:flex justify-center items-start gap-20 lg:gap-32">
        <div class="mt-8 md:mt-0 flex flex-col gap-4 text-text-dark font-bold text-sm">
          <h1 class="font-semibold text-lg mb-2 text-slate-900">Tentang</h1>
          <p>Tentang Kami</p>
          <p>Blog</p>
          <p>Karir</p>
          <p>Pekerjaan</p>
          <p>Berita</p>
          <p>Galeri</p>
          <p>Afilasi</p>
        </div>
        <div class="mt-8 md:mt-0 flex flex-col gap-4 text-text-dark font-bold text-sm">
          <h1 class="font-semibold text-lg mb-2 text-slate-900">Support</h1>
          <p>Kontak Kami</p>
          <p>Online Chat</p>
          <p>Whatsapp</p>
          <p>Telegram</p>
          <p>Ticket</p>
          <p>Call Center</p>
          <p>Bantuan</p>
        </div>
        <div class="mt-8 md:mt-0 flex flex-col gap-4 text-text-dark font-bold text-sm">
          <h1 class="font-semibold text-lg mb-2 text-slate-900">Contact</h1>
          <div className="text-primary-blue flex justify-start items-center gap-3">
            <img src="./images/telephone.png" alt="" className="scale-75" />
            <p>081999236495</p>
          </div>
          <div className="text-primary-blue flex justify-start items-center gap-3">
            <img src="./images/email.png" alt="" className="scale-75" />
            <p>azzamdinabdillah123@gmail.com</p>
          </div>
          <p>Jl. Ki lurah dullah, Ngadiluwih, Kabupaten Kediri, Jawa Timur</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
