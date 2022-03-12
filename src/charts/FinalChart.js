import Chart from "./Chart";
import Chart2 from "./Chart2";
import {
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

function FinalChart() {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" templateRows={"repeat(4, 1fr)"}>
          <GridItem>
            <Heading paddingBottom={"20px"} textAlign="center">
              Hello
            </Heading>
            <Chart />
          </GridItem>
          <GridItem w={"600px"} textAlign="center">
            <Text padding={"100px 40px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum lobortis sollicitudin. Phasellus faucibus nisl nec
              dictum ultrices. Donec aliquam efficitur libero eu venenatis.
              Vestibulum ultrices est in erat poas14314suere, id convallis orci
              volutpat. Sed turpis mi, dictum eget tempor eget, sodales in urna.
              Duis nec vestibulum elit, et convallis nisi. Fusce rutrum sit amet
              mi sit amet vulputate. Donec.
            </Text>
          </GridItem>
          <GridItem w={"600px"} textAlign="center">
            <Text margin={"120px 0 0 100px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum lobortis sollicitudin. Phasellus faucibus nisl nec
              dictum ultrices. Donec aliquam efficitur libero eu venenatis.
              Vestibulum ultrices est in erat posuere, id convallis orci
              volutpat. Sed turpis mi, dictum eget tempor eget, sodales in urna.
              Duis nec vestibulum elit, et convallis nisi. Fusce rutrum sit amet
              mi sit amet vulputate. Donec.
            </Text>
          </GridItem>
          <GridItem marginLeft={"100px"}>
            <Heading margin={"30px 0 -60px -120px"} textAlign="center">
              Hello
            </Heading>
            <Chart2 />
          </GridItem>
      </Grid>
      {console.log("hahaha")}
    </>
  );
}
export default FinalChart;
