import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { OrderService } from './order.service'; // Importe o serviço de pedido
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {} // Injete o serviço de pedido no controller
  
  @Get()
  @UseGuards(AuthGuard)
  getAllOrders(@Req() req) {
    const user = req.user
    console.log(user)
    return this.orderService.getAllOrders(user.sub);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getOrderById(@Req() req, @Param('id') id: string) {
    const {sub} = req.user
    const response = this.orderService.getOrderById(id,sub);
    if(!response){
      throw new HttpException(`Order not found`, HttpStatus.NOT_FOUND);
    }
    return response
  }

 @Get('/user/all')
 @UseGuards(AuthGuard)
 findOrderByUserId(@Req() req){
  const {sub} = req.user
  console.log(sub)
  if(!sub){
    throw new HttpException(`Not authorized`, HttpStatus.FORBIDDEN);
  }
    return this.orderService.findOrderByUserId(String(sub))
 }


  @Post("gameAddress/:gameAddress/previousOwner/:previousOwner/receiver/:receiver/nftId/:nftId/gameName/:gameName/gameSymbol/:gameSymbol")
  createOrder(
  @Param('gameAddress') gameAddress: string, 
  @Param('previousOwner') previousOwner: string,
  @Param('receiver') receiver:string, 
  @Param('nftId') nftId: number, 
  @Param('gameName') gameName: string, 
  @Param('gameSymbol') gameSymbol: string) {

    const orderData = {
      gameAddress,
      previousOwner,
      receiver,
      nftId: Number(nftId),
      gameName,
      gameSymbol
    }
    console.log('envio post',orderData)      
    if(Object.entries(orderData).length  == 6){
      return this.orderService.createOrder(orderData);
    }
    throw new HttpException(`invalid Payload`, HttpStatus.BAD_REQUEST);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateOrder(@Req() req,@Param('id') id: string, @Body() orderData: any) {
    const {sub} = req.user
    if(sub != id){
      throw new HttpException(`Not authorized`, HttpStatus.FORBIDDEN);
    }
    const response = this.orderService.updateOrder(id, orderData, sub);
    if(!response){
      throw new HttpException(`Order not found`, HttpStatus.NOT_FOUND);
    }
    return response
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteOrder(@Req() req,@Param('id') id: string) {
    const {sub} = req.user
    if(sub != id){
      throw new HttpException(`Not authorized`, HttpStatus.FORBIDDEN);
    }
    const response = this.orderService.deleteOrder(id, sub);
    if(!response){
      throw new HttpException(`Order not found`, HttpStatus.NOT_FOUND);
    }
    return response
  }
}
