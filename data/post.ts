// data/posts.ts
export const posts = [
  {
    slug: "7-sai-lam-khi-cham-soc-thu-cung",
    title: "7 Sai lầm khi chăm sóc thú cưng",
    description:
      "Những sai lầm phổ biến khi nuôi thú cưng khiến chúng gặp vấn đề về sức khỏe và hành vi. Tìm hiểu để tránh ngay!",
    content: `
       <ul className="mt-3 flex flex-col gap-5">
               <li>
                 <article>
                   <h2 className="font-medium text-lg">1. Thừa cân</h2>
                   <p>
                     Nhìn có vẻ dễ thương nhưng thú cưng thừa cân dễ mắc các vấn đề sức
                     khoẻ như như bênh tim, xương khớp, gan và thận. Thừa cân có thể
                     rút ngắn đáng kể tuổi thọ của thú cưng. Hãy hỏi bác sĩ thú y để
                     được tư vấn chế độ ăn phù hợp
                   </p>
                   <Image
                     className="mt-2"
                     src="/images/blog/1.png"
                     width={400}
                     height={300}
                     alt="png"
                   />
                 </article>
               </li>
               <li>
                 <article>
                   <h2 className="font-medium text-lg">
                     2. Không được làm quen với môi trường xung quanh
                   </h2>
                   <p>
                     Nếu nuôi thú cưng dạng cách ly như nhốt, xích trong quá trình dài
                     dễ gây cho chúng có xu hướng cảnh giác, sợ hãi hoặc hung dữ khi
                     trưởng thành
                   </p>
                   <Image
                     className="mt-2"
                     src="/images/blog/2.jpeg"
                     width={400}
                     height={300}
                     alt="png"
                   />
                 </article>
               </li>
               <li>
                 <article>
                   <h2 className="font-medium text-lg">3. Không chăm sóc lông</h2>
                   <p>
                     Mèo thường tự chăm sóc bản thân khá tốt, nhưng chó cần được hỗ trợ
                     nhiều hơn. Một số chó cần được chải lông hàng ngày, trong khi
                     những con khác chỉ cần tắm rửa thỉnh thoảng. Việc chăm sóc lông
                     không chỉ giúp thú cưng trông đẹp mà còn ảnh hưởng đến sự thoải
                     mái và điều hòa nhiệt độ của chúng. Lông bẩn và rối có thể gây khó
                     chịu và giảm khả năng cách nhiệt. Ngoài ra, việc chăm sóc răng
                     miệng và cắt móng cũng rất quan trọng. Móng chân quá dài có thể
                     ảnh hưởng đến dáng đi và gây ra các vấn đề về xương khớp
                   </p>
                   <Image
                     className="mt-2"
                     src="/images/blog/3.png"
                     width={400}
                     height={300}
                     alt="png"
                   />
                 </article>
               </li>
               <li>
                 <article>
                   <h2 className="font-medium text-lg">4. La mắng, đánh đập</h2>
                   <p>
                     Việc huấn luyện chó và hướng dẫn mèo về hành vi đúng đắn là cần
                     thiết. Đánh đập hoặc la mắng không chỉ không hiệu quả mà còn có
                     thể khiến thú cưng sợ hãi và mất lòng tin vào bạn
                   </p>
                   <Image
                     className="mt-2"
                     src="/images/blog/4.jpeg"
                     width={400}
                     height={300}
                     alt="png"
                   />
                 </article>
               </li>
               <li>
                 <article>
                   <h2 className="font-medium text-lg">5. Thiếu hoạt động giải trí</h2>
                   <p>
                     Mình nên dành thời gian để chơi với chúng và dù bạn nuôi loại động
                     vật nào, việc cung cấp các hoạt động giải trí hoặc làm phong phú
                     môi trường sống là cần thiết. Mèo cần chỗ chơi, chó cần được vận
                     động – đừng để chúng buồn!
                   </p>
                   <Image
                     className="mt-2"
                     src="/images/blog/5.jpeg"
                     width={400}
                     height={300}
                     alt="png"
                   />
                 </article>
               </li>
               <li>
                 <article>
                   <h2 className="font-medium text-lg">6. Không đi khám định kỳ</h2>
                   <p>
                     Kiểm tra định kỳ cũng giúp phát hiện sớm các vấn đề sức khỏe, giúp
                     điều trị hiệu quả hơn và tiết kiệm chi phí. Hãy chú ý đến các dấu
                     hiệu bệnh như chán ăn, tiêu chảy, nôn mửa, khó thở, mệt mỏi, khát
                     nước quá mức, co giật, giảm cân, ho, khó tiểu, hôi miệng, thay đổi
                     hành vi, rụng lông
                   </p>
                   <Image
                     className="mt-2"
                     src="/images/blog/6.jpeg"
                     width={400}
                     height={300}
                     alt="png"
                   />
                 </article>
               </li>
               <li>
                 <article>
                   <h2 className="font-medium text-lg">
                     7. Không tìm hiểu trước khi nuôi
                   </h2>
                   <p>
                     Mỗi giống chó hay mèo không phải giống nào cũng như nhau nên việc
                     tìm hiểu trước khi nuôi rất quan trọng. &quot;Đừng nuôi theo cảm
                     tính – hãy tìm hiểu kỹ trước khi quyết định!&quot;
                   </p>
                   <Image
                     className="mt-2"
                     src="/images/blog/7.jpeg"
                     width={400}
                     height={300}
                     alt="png"
                   />
                 </article>
               </li>
             </ul>
     `,
  },
];
