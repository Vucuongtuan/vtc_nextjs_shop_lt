import { Breadcrumbs } from "@/components/Breadcrumbs";
import GlobalLoading from "@/components/loadingPage";
import { getAllData } from "@/service/product";
import { Container } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default async function DetailsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { data } = await getAllData(params.id);

  return (
    <Suspense fallback={<GlobalLoading />}>
      <div className="bg-[#f2f2f2]">
        <Container>
          <Breadcrumbs data={data[0]?.name} />
          {children}
        </Container>
        <Container>
          <section className=" mt-2  flex flex-row-reverse">
            <div className="bg-white w-[38%] p-2 ">
              <h2 className="text-xl font-semibold mb-2">Thông tin kỹ thuật</h2>
              <table className="table table-zebra border-1 border ">
                {data &&
                  data?.map((item: any) => {
                    console.log("====================================");
                    console.log(item);
                    console.log("====================================");
                    return (
                      <tbody key={item._id}>
                        <tr>
                          <td>Màn hình</td>
                          <td>{item?.details.screen}</td>
                        </tr>
                        <tr>
                          <td>CPU</td>
                          <td>{item?.details.cpu}</td>
                        </tr>
                        <tr>
                          <td>Ram</td>
                          <td>{item?.details.ram}</td>
                        </tr>
                        <tr>
                          <td>Ổ Cứng</td>
                          <td>{item?.details.hard_drive}</td>
                        </tr>
                        <tr>
                          <td>Card</td>
                          <td>{item?.details.card_graphics}</td>
                        </tr>
                        <tr>
                          <td>Cổng Kết Nối</td>
                          <td>
                            {item?.details.connector.map(
                              (conn: string, index: number) => (
                                <li key={index}>{conn}</li>
                              )
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Hệ điều hành</td>
                          <td>{item?.details.system}</td>
                        </tr>
                        <tr>
                          <td>Trọng lượng</td>
                          <td>{item?.details.size}</td>
                        </tr>
                        <tr>
                          <td>Kích thước</td>
                          <td>{item?.details.weight}</td>
                        </tr>
                        <tr>
                          <td>pin</td>
                          <td>{item?.details.pin}</td>
                        </tr>
                        <tr>
                          <td>Wifi & Bluetooth</td>
                          <td>{item?.details.wifi_bluetooth}</td>
                        </tr>
                        <tr>
                          <td>Cammera</td>
                          <td>{item?.details.cam}</td>
                        </tr>
                        <tr>
                          <td>Hãng</td>
                          <td>{item?.details.brands}</td>
                        </tr>
                        <tr>
                          <td>Âm thanh</td>
                          <td>{item?.details.audio}</td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
            <div className="w-[60%]">Post</div>
          </section>

          <hr />
          <div className="comment">comment</div>
        </Container>
      </div>
    </Suspense>
  );
}
