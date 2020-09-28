import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogadoresModule } from './jogadores/jogadores.module';
import { Mongoose} from 'mongoose';
import { MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rafael1234:rafael1234@cluster0.sawxz.mongodb.net/dbNest?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
  JogadoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}