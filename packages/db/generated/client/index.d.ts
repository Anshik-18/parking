
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model merchant
 * 
 */
export type merchant = $Result.DefaultSelection<Prisma.$merchantPayload>
/**
 * Model cardetails
 * 
 */
export type cardetails = $Result.DefaultSelection<Prisma.$cardetailsPayload>
/**
 * Model parkings
 * 
 */
export type parkings = $Result.DefaultSelection<Prisma.$parkingsPayload>
/**
 * Model nonBooking_parking
 * 
 */
export type nonBooking_parking = $Result.DefaultSelection<Prisma.$nonBooking_parkingPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model parkinglot
 * 
 */
export type parkinglot = $Result.DefaultSelection<Prisma.$parkinglotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotificationType: {
  BOOKING_SUCCESS: 'BOOKING_SUCCESS',
  SLOT_OCCUPIED: 'SLOT_OCCUPIED',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  GENERAL: 'GENERAL'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const Status: {
  Pre_booked: 'Pre_booked',
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  Parked: 'Parked'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merchant`: Exposes CRUD operations for the **merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.merchantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardetails`: Exposes CRUD operations for the **cardetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cardetails
    * const cardetails = await prisma.cardetails.findMany()
    * ```
    */
  get cardetails(): Prisma.cardetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkings`: Exposes CRUD operations for the **parkings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parkings
    * const parkings = await prisma.parkings.findMany()
    * ```
    */
  get parkings(): Prisma.parkingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nonBooking_parking`: Exposes CRUD operations for the **nonBooking_parking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NonBooking_parkings
    * const nonBooking_parkings = await prisma.nonBooking_parking.findMany()
    * ```
    */
  get nonBooking_parking(): Prisma.nonBooking_parkingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkinglot`: Exposes CRUD operations for the **parkinglot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parkinglots
    * const parkinglots = await prisma.parkinglot.findMany()
    * ```
    */
  get parkinglot(): Prisma.parkinglotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    merchant: 'merchant',
    cardetails: 'cardetails',
    parkings: 'parkings',
    nonBooking_parking: 'nonBooking_parking',
    notifications: 'notifications',
    parkinglot: 'parkinglot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "merchant" | "cardetails" | "parkings" | "nonBooking_parking" | "notifications" | "parkinglot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      merchant: {
        payload: Prisma.$merchantPayload<ExtArgs>
        fields: Prisma.merchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.merchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.merchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>
          }
          findFirst: {
            args: Prisma.merchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.merchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>
          }
          findMany: {
            args: Prisma.merchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>[]
          }
          create: {
            args: Prisma.merchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>
          }
          createMany: {
            args: Prisma.merchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.merchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>[]
          }
          delete: {
            args: Prisma.merchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>
          }
          update: {
            args: Prisma.merchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>
          }
          deleteMany: {
            args: Prisma.merchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.merchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.merchantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>[]
          }
          upsert: {
            args: Prisma.merchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.merchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.merchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      cardetails: {
        payload: Prisma.$cardetailsPayload<ExtArgs>
        fields: Prisma.cardetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cardetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cardetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>
          }
          findFirst: {
            args: Prisma.cardetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cardetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>
          }
          findMany: {
            args: Prisma.cardetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>[]
          }
          create: {
            args: Prisma.cardetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>
          }
          createMany: {
            args: Prisma.cardetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cardetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>[]
          }
          delete: {
            args: Prisma.cardetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>
          }
          update: {
            args: Prisma.cardetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>
          }
          deleteMany: {
            args: Prisma.cardetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cardetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cardetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>[]
          }
          upsert: {
            args: Prisma.cardetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardetailsPayload>
          }
          aggregate: {
            args: Prisma.CardetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardetails>
          }
          groupBy: {
            args: Prisma.cardetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cardetailsCountArgs<ExtArgs>
            result: $Utils.Optional<CardetailsCountAggregateOutputType> | number
          }
        }
      }
      parkings: {
        payload: Prisma.$parkingsPayload<ExtArgs>
        fields: Prisma.parkingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.parkingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.parkingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>
          }
          findFirst: {
            args: Prisma.parkingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.parkingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>
          }
          findMany: {
            args: Prisma.parkingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>[]
          }
          create: {
            args: Prisma.parkingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>
          }
          createMany: {
            args: Prisma.parkingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.parkingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>[]
          }
          delete: {
            args: Prisma.parkingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>
          }
          update: {
            args: Prisma.parkingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>
          }
          deleteMany: {
            args: Prisma.parkingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.parkingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.parkingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>[]
          }
          upsert: {
            args: Prisma.parkingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkingsPayload>
          }
          aggregate: {
            args: Prisma.ParkingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkings>
          }
          groupBy: {
            args: Prisma.parkingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.parkingsCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingsCountAggregateOutputType> | number
          }
        }
      }
      nonBooking_parking: {
        payload: Prisma.$nonBooking_parkingPayload<ExtArgs>
        fields: Prisma.nonBooking_parkingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nonBooking_parkingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nonBooking_parkingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>
          }
          findFirst: {
            args: Prisma.nonBooking_parkingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nonBooking_parkingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>
          }
          findMany: {
            args: Prisma.nonBooking_parkingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>[]
          }
          create: {
            args: Prisma.nonBooking_parkingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>
          }
          createMany: {
            args: Prisma.nonBooking_parkingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nonBooking_parkingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>[]
          }
          delete: {
            args: Prisma.nonBooking_parkingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>
          }
          update: {
            args: Prisma.nonBooking_parkingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>
          }
          deleteMany: {
            args: Prisma.nonBooking_parkingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nonBooking_parkingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nonBooking_parkingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>[]
          }
          upsert: {
            args: Prisma.nonBooking_parkingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nonBooking_parkingPayload>
          }
          aggregate: {
            args: Prisma.NonBooking_parkingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNonBooking_parking>
          }
          groupBy: {
            args: Prisma.nonBooking_parkingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NonBooking_parkingGroupByOutputType>[]
          }
          count: {
            args: Prisma.nonBooking_parkingCountArgs<ExtArgs>
            result: $Utils.Optional<NonBooking_parkingCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      parkinglot: {
        payload: Prisma.$parkinglotPayload<ExtArgs>
        fields: Prisma.parkinglotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.parkinglotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.parkinglotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>
          }
          findFirst: {
            args: Prisma.parkinglotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.parkinglotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>
          }
          findMany: {
            args: Prisma.parkinglotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>[]
          }
          create: {
            args: Prisma.parkinglotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>
          }
          createMany: {
            args: Prisma.parkinglotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.parkinglotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>[]
          }
          delete: {
            args: Prisma.parkinglotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>
          }
          update: {
            args: Prisma.parkinglotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>
          }
          deleteMany: {
            args: Prisma.parkinglotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.parkinglotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.parkinglotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>[]
          }
          upsert: {
            args: Prisma.parkinglotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parkinglotPayload>
          }
          aggregate: {
            args: Prisma.ParkinglotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkinglot>
          }
          groupBy: {
            args: Prisma.parkinglotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkinglotGroupByOutputType>[]
          }
          count: {
            args: Prisma.parkinglotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkinglotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    merchant?: merchantOmit
    cardetails?: cardetailsOmit
    parkings?: parkingsOmit
    nonBooking_parking?: nonBooking_parkingOmit
    notifications?: notificationsOmit
    parkinglot?: parkinglotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cardetails: number
    parking: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardetails?: boolean | UserCountOutputTypeCountCardetailsArgs
    parking?: boolean | UserCountOutputTypeCountParkingArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cardetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parkingsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Count Type MerchantCountOutputType
   */

  export type MerchantCountOutputType = {
    parkinglot: number
  }

  export type MerchantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkinglot?: boolean | MerchantCountOutputTypeCountParkinglotArgs
  }

  // Custom InputTypes
  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCountOutputType
     */
    select?: MerchantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountParkinglotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parkinglotWhereInput
  }


  /**
   * Count Type ParkinglotCountOutputType
   */

  export type ParkinglotCountOutputType = {
    parkings: number
    nonBooking_parking: number
  }

  export type ParkinglotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkings?: boolean | ParkinglotCountOutputTypeCountParkingsArgs
    nonBooking_parking?: boolean | ParkinglotCountOutputTypeCountNonBooking_parkingArgs
  }

  // Custom InputTypes
  /**
   * ParkinglotCountOutputType without action
   */
  export type ParkinglotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinglotCountOutputType
     */
    select?: ParkinglotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkinglotCountOutputType without action
   */
  export type ParkinglotCountOutputTypeCountParkingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parkingsWhereInput
  }

  /**
   * ParkinglotCountOutputType without action
   */
  export type ParkinglotCountOutputTypeCountNonBooking_parkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nonBooking_parkingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    number: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    name: string | null
    number: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    cardetails?: boolean | User$cardetailsArgs<ExtArgs>
    parking?: boolean | User$parkingArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "number" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardetails?: boolean | User$cardetailsArgs<ExtArgs>
    parking?: boolean | User$parkingArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cardetails: Prisma.$cardetailsPayload<ExtArgs>[]
      parking: Prisma.$parkingsPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      name: string | null
      number: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cardetails<T extends User$cardetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$cardetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parking<T extends User$parkingArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cardetails
   */
  export type User$cardetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    where?: cardetailsWhereInput
    orderBy?: cardetailsOrderByWithRelationInput | cardetailsOrderByWithRelationInput[]
    cursor?: cardetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardetailsScalarFieldEnum | CardetailsScalarFieldEnum[]
  }

  /**
   * User.parking
   */
  export type User$parkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    where?: parkingsWhereInput
    orderBy?: parkingsOrderByWithRelationInput | parkingsOrderByWithRelationInput[]
    cursor?: parkingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingsScalarFieldEnum | ParkingsScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantAvgAggregateOutputType = {
    id: number | null
  }

  export type MerchantSumAggregateOutputType = {
    id: number | null
  }

  export type MerchantMinAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    password: string | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    password: string | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    name: number
    number: number
    password: number
    _all: number
  }


  export type MerchantAvgAggregateInputType = {
    id?: true
  }

  export type MerchantSumAggregateInputType = {
    id?: true
  }

  export type MerchantMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    password?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    password?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    password?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merchant to aggregate.
     */
    where?: merchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantOrderByWithRelationInput | merchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: merchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type merchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: merchantWhereInput
    orderBy?: merchantOrderByWithAggregationInput | merchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: merchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _avg?: MerchantAvgAggregateInputType
    _sum?: MerchantSumAggregateInputType
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: number
    name: string
    number: string
    password: string
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends merchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type merchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    parkinglot?: boolean | merchant$parkinglotArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type merchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type merchantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type merchantSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
  }

  export type merchantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "password", ExtArgs["result"]["merchant"]>
  export type merchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkinglot?: boolean | merchant$parkinglotArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type merchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type merchantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $merchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "merchant"
    objects: {
      parkinglot: Prisma.$parkinglotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number: string
      password: string
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type merchantGetPayload<S extends boolean | null | undefined | merchantDefaultArgs> = $Result.GetResult<Prisma.$merchantPayload, S>

  type merchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<merchantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface merchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['merchant'], meta: { name: 'merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {merchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends merchantFindUniqueArgs>(args: SelectSubset<T, merchantFindUniqueArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {merchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends merchantFindUniqueOrThrowArgs>(args: SelectSubset<T, merchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends merchantFindFirstArgs>(args?: SelectSubset<T, merchantFindFirstArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends merchantFindFirstOrThrowArgs>(args?: SelectSubset<T, merchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends merchantFindManyArgs>(args?: SelectSubset<T, merchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merchant.
     * @param {merchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends merchantCreateArgs>(args: SelectSubset<T, merchantCreateArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merchants.
     * @param {merchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends merchantCreateManyArgs>(args?: SelectSubset<T, merchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {merchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends merchantCreateManyAndReturnArgs>(args?: SelectSubset<T, merchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merchant.
     * @param {merchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends merchantDeleteArgs>(args: SelectSubset<T, merchantDeleteArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merchant.
     * @param {merchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends merchantUpdateArgs>(args: SelectSubset<T, merchantUpdateArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merchants.
     * @param {merchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends merchantDeleteManyArgs>(args?: SelectSubset<T, merchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends merchantUpdateManyArgs>(args: SelectSubset<T, merchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants and returns the data updated in the database.
     * @param {merchantUpdateManyAndReturnArgs} args - Arguments to update many Merchants.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends merchantUpdateManyAndReturnArgs>(args: SelectSubset<T, merchantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merchant.
     * @param {merchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends merchantUpsertArgs>(args: SelectSubset<T, merchantUpsertArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends merchantCountArgs>(
      args?: Subset<T, merchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends merchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: merchantGroupByArgs['orderBy'] }
        : { orderBy?: merchantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, merchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the merchant model
   */
  readonly fields: merchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__merchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkinglot<T extends merchant$parkinglotArgs<ExtArgs> = {}>(args?: Subset<T, merchant$parkinglotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the merchant model
   */
  interface merchantFieldRefs {
    readonly id: FieldRef<"merchant", 'Int'>
    readonly name: FieldRef<"merchant", 'String'>
    readonly number: FieldRef<"merchant", 'String'>
    readonly password: FieldRef<"merchant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * merchant findUnique
   */
  export type merchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * Filter, which merchant to fetch.
     */
    where: merchantWhereUniqueInput
  }

  /**
   * merchant findUniqueOrThrow
   */
  export type merchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * Filter, which merchant to fetch.
     */
    where: merchantWhereUniqueInput
  }

  /**
   * merchant findFirst
   */
  export type merchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * Filter, which merchant to fetch.
     */
    where?: merchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantOrderByWithRelationInput | merchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merchants.
     */
    cursor?: merchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * merchant findFirstOrThrow
   */
  export type merchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * Filter, which merchant to fetch.
     */
    where?: merchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantOrderByWithRelationInput | merchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merchants.
     */
    cursor?: merchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * merchant findMany
   */
  export type merchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where?: merchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantOrderByWithRelationInput | merchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing merchants.
     */
    cursor?: merchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * merchant create
   */
  export type merchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * The data needed to create a merchant.
     */
    data: XOR<merchantCreateInput, merchantUncheckedCreateInput>
  }

  /**
   * merchant createMany
   */
  export type merchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many merchants.
     */
    data: merchantCreateManyInput | merchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * merchant createManyAndReturn
   */
  export type merchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * The data used to create many merchants.
     */
    data: merchantCreateManyInput | merchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * merchant update
   */
  export type merchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * The data needed to update a merchant.
     */
    data: XOR<merchantUpdateInput, merchantUncheckedUpdateInput>
    /**
     * Choose, which merchant to update.
     */
    where: merchantWhereUniqueInput
  }

  /**
   * merchant updateMany
   */
  export type merchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update merchants.
     */
    data: XOR<merchantUpdateManyMutationInput, merchantUncheckedUpdateManyInput>
    /**
     * Filter which merchants to update
     */
    where?: merchantWhereInput
    /**
     * Limit how many merchants to update.
     */
    limit?: number
  }

  /**
   * merchant updateManyAndReturn
   */
  export type merchantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * The data used to update merchants.
     */
    data: XOR<merchantUpdateManyMutationInput, merchantUncheckedUpdateManyInput>
    /**
     * Filter which merchants to update
     */
    where?: merchantWhereInput
    /**
     * Limit how many merchants to update.
     */
    limit?: number
  }

  /**
   * merchant upsert
   */
  export type merchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * The filter to search for the merchant to update in case it exists.
     */
    where: merchantWhereUniqueInput
    /**
     * In case the merchant found by the `where` argument doesn't exist, create a new merchant with this data.
     */
    create: XOR<merchantCreateInput, merchantUncheckedCreateInput>
    /**
     * In case the merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<merchantUpdateInput, merchantUncheckedUpdateInput>
  }

  /**
   * merchant delete
   */
  export type merchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
    /**
     * Filter which merchant to delete.
     */
    where: merchantWhereUniqueInput
  }

  /**
   * merchant deleteMany
   */
  export type merchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merchants to delete
     */
    where?: merchantWhereInput
    /**
     * Limit how many merchants to delete.
     */
    limit?: number
  }

  /**
   * merchant.parkinglot
   */
  export type merchant$parkinglotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    where?: parkinglotWhereInput
    orderBy?: parkinglotOrderByWithRelationInput | parkinglotOrderByWithRelationInput[]
    cursor?: parkinglotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkinglotScalarFieldEnum | ParkinglotScalarFieldEnum[]
  }

  /**
   * merchant without action
   */
  export type merchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchant
     */
    select?: merchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchant
     */
    omit?: merchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: merchantInclude<ExtArgs> | null
  }


  /**
   * Model cardetails
   */

  export type AggregateCardetails = {
    _count: CardetailsCountAggregateOutputType | null
    _avg: CardetailsAvgAggregateOutputType | null
    _sum: CardetailsSumAggregateOutputType | null
    _min: CardetailsMinAggregateOutputType | null
    _max: CardetailsMaxAggregateOutputType | null
  }

  export type CardetailsAvgAggregateOutputType = {
    id: number | null
    ownerid: number | null
  }

  export type CardetailsSumAggregateOutputType = {
    id: number | null
    ownerid: number | null
  }

  export type CardetailsMinAggregateOutputType = {
    id: number | null
    Carnumber: string | null
    ownerid: number | null
    iselectric: boolean | null
    isparked: boolean | null
  }

  export type CardetailsMaxAggregateOutputType = {
    id: number | null
    Carnumber: string | null
    ownerid: number | null
    iselectric: boolean | null
    isparked: boolean | null
  }

  export type CardetailsCountAggregateOutputType = {
    id: number
    Carnumber: number
    ownerid: number
    iselectric: number
    isparked: number
    _all: number
  }


  export type CardetailsAvgAggregateInputType = {
    id?: true
    ownerid?: true
  }

  export type CardetailsSumAggregateInputType = {
    id?: true
    ownerid?: true
  }

  export type CardetailsMinAggregateInputType = {
    id?: true
    Carnumber?: true
    ownerid?: true
    iselectric?: true
    isparked?: true
  }

  export type CardetailsMaxAggregateInputType = {
    id?: true
    Carnumber?: true
    ownerid?: true
    iselectric?: true
    isparked?: true
  }

  export type CardetailsCountAggregateInputType = {
    id?: true
    Carnumber?: true
    ownerid?: true
    iselectric?: true
    isparked?: true
    _all?: true
  }

  export type CardetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cardetails to aggregate.
     */
    where?: cardetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cardetails to fetch.
     */
    orderBy?: cardetailsOrderByWithRelationInput | cardetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cardetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cardetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cardetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cardetails
    **/
    _count?: true | CardetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardetailsMaxAggregateInputType
  }

  export type GetCardetailsAggregateType<T extends CardetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateCardetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardetails[P]>
      : GetScalarType<T[P], AggregateCardetails[P]>
  }




  export type cardetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cardetailsWhereInput
    orderBy?: cardetailsOrderByWithAggregationInput | cardetailsOrderByWithAggregationInput[]
    by: CardetailsScalarFieldEnum[] | CardetailsScalarFieldEnum
    having?: cardetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardetailsCountAggregateInputType | true
    _avg?: CardetailsAvgAggregateInputType
    _sum?: CardetailsSumAggregateInputType
    _min?: CardetailsMinAggregateInputType
    _max?: CardetailsMaxAggregateInputType
  }

  export type CardetailsGroupByOutputType = {
    id: number
    Carnumber: string
    ownerid: number
    iselectric: boolean
    isparked: boolean
    _count: CardetailsCountAggregateOutputType | null
    _avg: CardetailsAvgAggregateOutputType | null
    _sum: CardetailsSumAggregateOutputType | null
    _min: CardetailsMinAggregateOutputType | null
    _max: CardetailsMaxAggregateOutputType | null
  }

  type GetCardetailsGroupByPayload<T extends cardetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardetailsGroupByOutputType[P]>
            : GetScalarType<T[P], CardetailsGroupByOutputType[P]>
        }
      >
    >


  export type cardetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Carnumber?: boolean
    ownerid?: boolean
    iselectric?: boolean
    isparked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardetails"]>

  export type cardetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Carnumber?: boolean
    ownerid?: boolean
    iselectric?: boolean
    isparked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardetails"]>

  export type cardetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Carnumber?: boolean
    ownerid?: boolean
    iselectric?: boolean
    isparked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardetails"]>

  export type cardetailsSelectScalar = {
    id?: boolean
    Carnumber?: boolean
    ownerid?: boolean
    iselectric?: boolean
    isparked?: boolean
  }

  export type cardetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Carnumber" | "ownerid" | "iselectric" | "isparked", ExtArgs["result"]["cardetails"]>
  export type cardetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type cardetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type cardetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $cardetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cardetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Carnumber: string
      ownerid: number
      iselectric: boolean
      isparked: boolean
    }, ExtArgs["result"]["cardetails"]>
    composites: {}
  }

  type cardetailsGetPayload<S extends boolean | null | undefined | cardetailsDefaultArgs> = $Result.GetResult<Prisma.$cardetailsPayload, S>

  type cardetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cardetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardetailsCountAggregateInputType | true
    }

  export interface cardetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cardetails'], meta: { name: 'cardetails' } }
    /**
     * Find zero or one Cardetails that matches the filter.
     * @param {cardetailsFindUniqueArgs} args - Arguments to find a Cardetails
     * @example
     * // Get one Cardetails
     * const cardetails = await prisma.cardetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cardetailsFindUniqueArgs>(args: SelectSubset<T, cardetailsFindUniqueArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cardetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cardetailsFindUniqueOrThrowArgs} args - Arguments to find a Cardetails
     * @example
     * // Get one Cardetails
     * const cardetails = await prisma.cardetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cardetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, cardetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardetailsFindFirstArgs} args - Arguments to find a Cardetails
     * @example
     * // Get one Cardetails
     * const cardetails = await prisma.cardetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cardetailsFindFirstArgs>(args?: SelectSubset<T, cardetailsFindFirstArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardetailsFindFirstOrThrowArgs} args - Arguments to find a Cardetails
     * @example
     * // Get one Cardetails
     * const cardetails = await prisma.cardetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cardetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, cardetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cardetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cardetails
     * const cardetails = await prisma.cardetails.findMany()
     * 
     * // Get first 10 Cardetails
     * const cardetails = await prisma.cardetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardetailsWithIdOnly = await prisma.cardetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cardetailsFindManyArgs>(args?: SelectSubset<T, cardetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cardetails.
     * @param {cardetailsCreateArgs} args - Arguments to create a Cardetails.
     * @example
     * // Create one Cardetails
     * const Cardetails = await prisma.cardetails.create({
     *   data: {
     *     // ... data to create a Cardetails
     *   }
     * })
     * 
     */
    create<T extends cardetailsCreateArgs>(args: SelectSubset<T, cardetailsCreateArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cardetails.
     * @param {cardetailsCreateManyArgs} args - Arguments to create many Cardetails.
     * @example
     * // Create many Cardetails
     * const cardetails = await prisma.cardetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cardetailsCreateManyArgs>(args?: SelectSubset<T, cardetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cardetails and returns the data saved in the database.
     * @param {cardetailsCreateManyAndReturnArgs} args - Arguments to create many Cardetails.
     * @example
     * // Create many Cardetails
     * const cardetails = await prisma.cardetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cardetails and only return the `id`
     * const cardetailsWithIdOnly = await prisma.cardetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cardetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, cardetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cardetails.
     * @param {cardetailsDeleteArgs} args - Arguments to delete one Cardetails.
     * @example
     * // Delete one Cardetails
     * const Cardetails = await prisma.cardetails.delete({
     *   where: {
     *     // ... filter to delete one Cardetails
     *   }
     * })
     * 
     */
    delete<T extends cardetailsDeleteArgs>(args: SelectSubset<T, cardetailsDeleteArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cardetails.
     * @param {cardetailsUpdateArgs} args - Arguments to update one Cardetails.
     * @example
     * // Update one Cardetails
     * const cardetails = await prisma.cardetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cardetailsUpdateArgs>(args: SelectSubset<T, cardetailsUpdateArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cardetails.
     * @param {cardetailsDeleteManyArgs} args - Arguments to filter Cardetails to delete.
     * @example
     * // Delete a few Cardetails
     * const { count } = await prisma.cardetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cardetailsDeleteManyArgs>(args?: SelectSubset<T, cardetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cardetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cardetails
     * const cardetails = await prisma.cardetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cardetailsUpdateManyArgs>(args: SelectSubset<T, cardetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cardetails and returns the data updated in the database.
     * @param {cardetailsUpdateManyAndReturnArgs} args - Arguments to update many Cardetails.
     * @example
     * // Update many Cardetails
     * const cardetails = await prisma.cardetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cardetails and only return the `id`
     * const cardetailsWithIdOnly = await prisma.cardetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cardetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, cardetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cardetails.
     * @param {cardetailsUpsertArgs} args - Arguments to update or create a Cardetails.
     * @example
     * // Update or create a Cardetails
     * const cardetails = await prisma.cardetails.upsert({
     *   create: {
     *     // ... data to create a Cardetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cardetails we want to update
     *   }
     * })
     */
    upsert<T extends cardetailsUpsertArgs>(args: SelectSubset<T, cardetailsUpsertArgs<ExtArgs>>): Prisma__cardetailsClient<$Result.GetResult<Prisma.$cardetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cardetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardetailsCountArgs} args - Arguments to filter Cardetails to count.
     * @example
     * // Count the number of Cardetails
     * const count = await prisma.cardetails.count({
     *   where: {
     *     // ... the filter for the Cardetails we want to count
     *   }
     * })
    **/
    count<T extends cardetailsCountArgs>(
      args?: Subset<T, cardetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cardetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardetailsAggregateArgs>(args: Subset<T, CardetailsAggregateArgs>): Prisma.PrismaPromise<GetCardetailsAggregateType<T>>

    /**
     * Group by Cardetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cardetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cardetailsGroupByArgs['orderBy'] }
        : { orderBy?: cardetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cardetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cardetails model
   */
  readonly fields: cardetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cardetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cardetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cardetails model
   */
  interface cardetailsFieldRefs {
    readonly id: FieldRef<"cardetails", 'Int'>
    readonly Carnumber: FieldRef<"cardetails", 'String'>
    readonly ownerid: FieldRef<"cardetails", 'Int'>
    readonly iselectric: FieldRef<"cardetails", 'Boolean'>
    readonly isparked: FieldRef<"cardetails", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * cardetails findUnique
   */
  export type cardetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * Filter, which cardetails to fetch.
     */
    where: cardetailsWhereUniqueInput
  }

  /**
   * cardetails findUniqueOrThrow
   */
  export type cardetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * Filter, which cardetails to fetch.
     */
    where: cardetailsWhereUniqueInput
  }

  /**
   * cardetails findFirst
   */
  export type cardetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * Filter, which cardetails to fetch.
     */
    where?: cardetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cardetails to fetch.
     */
    orderBy?: cardetailsOrderByWithRelationInput | cardetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cardetails.
     */
    cursor?: cardetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cardetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cardetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cardetails.
     */
    distinct?: CardetailsScalarFieldEnum | CardetailsScalarFieldEnum[]
  }

  /**
   * cardetails findFirstOrThrow
   */
  export type cardetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * Filter, which cardetails to fetch.
     */
    where?: cardetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cardetails to fetch.
     */
    orderBy?: cardetailsOrderByWithRelationInput | cardetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cardetails.
     */
    cursor?: cardetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cardetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cardetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cardetails.
     */
    distinct?: CardetailsScalarFieldEnum | CardetailsScalarFieldEnum[]
  }

  /**
   * cardetails findMany
   */
  export type cardetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * Filter, which cardetails to fetch.
     */
    where?: cardetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cardetails to fetch.
     */
    orderBy?: cardetailsOrderByWithRelationInput | cardetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cardetails.
     */
    cursor?: cardetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cardetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cardetails.
     */
    skip?: number
    distinct?: CardetailsScalarFieldEnum | CardetailsScalarFieldEnum[]
  }

  /**
   * cardetails create
   */
  export type cardetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a cardetails.
     */
    data: XOR<cardetailsCreateInput, cardetailsUncheckedCreateInput>
  }

  /**
   * cardetails createMany
   */
  export type cardetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cardetails.
     */
    data: cardetailsCreateManyInput | cardetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cardetails createManyAndReturn
   */
  export type cardetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * The data used to create many cardetails.
     */
    data: cardetailsCreateManyInput | cardetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cardetails update
   */
  export type cardetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a cardetails.
     */
    data: XOR<cardetailsUpdateInput, cardetailsUncheckedUpdateInput>
    /**
     * Choose, which cardetails to update.
     */
    where: cardetailsWhereUniqueInput
  }

  /**
   * cardetails updateMany
   */
  export type cardetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cardetails.
     */
    data: XOR<cardetailsUpdateManyMutationInput, cardetailsUncheckedUpdateManyInput>
    /**
     * Filter which cardetails to update
     */
    where?: cardetailsWhereInput
    /**
     * Limit how many cardetails to update.
     */
    limit?: number
  }

  /**
   * cardetails updateManyAndReturn
   */
  export type cardetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * The data used to update cardetails.
     */
    data: XOR<cardetailsUpdateManyMutationInput, cardetailsUncheckedUpdateManyInput>
    /**
     * Filter which cardetails to update
     */
    where?: cardetailsWhereInput
    /**
     * Limit how many cardetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cardetails upsert
   */
  export type cardetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the cardetails to update in case it exists.
     */
    where: cardetailsWhereUniqueInput
    /**
     * In case the cardetails found by the `where` argument doesn't exist, create a new cardetails with this data.
     */
    create: XOR<cardetailsCreateInput, cardetailsUncheckedCreateInput>
    /**
     * In case the cardetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cardetailsUpdateInput, cardetailsUncheckedUpdateInput>
  }

  /**
   * cardetails delete
   */
  export type cardetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
    /**
     * Filter which cardetails to delete.
     */
    where: cardetailsWhereUniqueInput
  }

  /**
   * cardetails deleteMany
   */
  export type cardetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cardetails to delete
     */
    where?: cardetailsWhereInput
    /**
     * Limit how many cardetails to delete.
     */
    limit?: number
  }

  /**
   * cardetails without action
   */
  export type cardetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardetails
     */
    select?: cardetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cardetails
     */
    omit?: cardetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardetailsInclude<ExtArgs> | null
  }


  /**
   * Model parkings
   */

  export type AggregateParkings = {
    _count: ParkingsCountAggregateOutputType | null
    _avg: ParkingsAvgAggregateOutputType | null
    _sum: ParkingsSumAggregateOutputType | null
    _min: ParkingsMinAggregateOutputType | null
    _max: ParkingsMaxAggregateOutputType | null
  }

  export type ParkingsAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    parkingslotid: number | null
  }

  export type ParkingsSumAggregateOutputType = {
    id: number | null
    userid: number | null
    parkingslotid: number | null
  }

  export type ParkingsMinAggregateOutputType = {
    id: number | null
    userid: number | null
    date: Date | null
    starttime: Date | null
    endtime: Date | null
    totaltime: string | null
    parkingslotid: number | null
    carnumber: string | null
    status: $Enums.Status | null
  }

  export type ParkingsMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    date: Date | null
    starttime: Date | null
    endtime: Date | null
    totaltime: string | null
    parkingslotid: number | null
    carnumber: string | null
    status: $Enums.Status | null
  }

  export type ParkingsCountAggregateOutputType = {
    id: number
    userid: number
    date: number
    starttime: number
    endtime: number
    totaltime: number
    parkingslotid: number
    carnumber: number
    status: number
    _all: number
  }


  export type ParkingsAvgAggregateInputType = {
    id?: true
    userid?: true
    parkingslotid?: true
  }

  export type ParkingsSumAggregateInputType = {
    id?: true
    userid?: true
    parkingslotid?: true
  }

  export type ParkingsMinAggregateInputType = {
    id?: true
    userid?: true
    date?: true
    starttime?: true
    endtime?: true
    totaltime?: true
    parkingslotid?: true
    carnumber?: true
    status?: true
  }

  export type ParkingsMaxAggregateInputType = {
    id?: true
    userid?: true
    date?: true
    starttime?: true
    endtime?: true
    totaltime?: true
    parkingslotid?: true
    carnumber?: true
    status?: true
  }

  export type ParkingsCountAggregateInputType = {
    id?: true
    userid?: true
    date?: true
    starttime?: true
    endtime?: true
    totaltime?: true
    parkingslotid?: true
    carnumber?: true
    status?: true
    _all?: true
  }

  export type ParkingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parkings to aggregate.
     */
    where?: parkingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkings to fetch.
     */
    orderBy?: parkingsOrderByWithRelationInput | parkingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: parkingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parkings
    **/
    _count?: true | ParkingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingsMaxAggregateInputType
  }

  export type GetParkingsAggregateType<T extends ParkingsAggregateArgs> = {
        [P in keyof T & keyof AggregateParkings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkings[P]>
      : GetScalarType<T[P], AggregateParkings[P]>
  }




  export type parkingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parkingsWhereInput
    orderBy?: parkingsOrderByWithAggregationInput | parkingsOrderByWithAggregationInput[]
    by: ParkingsScalarFieldEnum[] | ParkingsScalarFieldEnum
    having?: parkingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingsCountAggregateInputType | true
    _avg?: ParkingsAvgAggregateInputType
    _sum?: ParkingsSumAggregateInputType
    _min?: ParkingsMinAggregateInputType
    _max?: ParkingsMaxAggregateInputType
  }

  export type ParkingsGroupByOutputType = {
    id: number
    userid: number
    date: Date
    starttime: Date
    endtime: Date
    totaltime: string
    parkingslotid: number
    carnumber: string
    status: $Enums.Status
    _count: ParkingsCountAggregateOutputType | null
    _avg: ParkingsAvgAggregateOutputType | null
    _sum: ParkingsSumAggregateOutputType | null
    _min: ParkingsMinAggregateOutputType | null
    _max: ParkingsMaxAggregateOutputType | null
  }

  type GetParkingsGroupByPayload<T extends parkingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingsGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingsGroupByOutputType[P]>
        }
      >
    >


  export type parkingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    date?: boolean
    starttime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkingslotid?: boolean
    carnumber?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingslot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkings"]>

  export type parkingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    date?: boolean
    starttime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkingslotid?: boolean
    carnumber?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingslot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkings"]>

  export type parkingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    date?: boolean
    starttime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkingslotid?: boolean
    carnumber?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingslot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkings"]>

  export type parkingsSelectScalar = {
    id?: boolean
    userid?: boolean
    date?: boolean
    starttime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkingslotid?: boolean
    carnumber?: boolean
    status?: boolean
  }

  export type parkingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "date" | "starttime" | "endtime" | "totaltime" | "parkingslotid" | "carnumber" | "status", ExtArgs["result"]["parkings"]>
  export type parkingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingslot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }
  export type parkingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingslot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }
  export type parkingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingslot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }

  export type $parkingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parkings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parkingslot: Prisma.$parkinglotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      date: Date
      starttime: Date
      endtime: Date
      totaltime: string
      parkingslotid: number
      carnumber: string
      status: $Enums.Status
    }, ExtArgs["result"]["parkings"]>
    composites: {}
  }

  type parkingsGetPayload<S extends boolean | null | undefined | parkingsDefaultArgs> = $Result.GetResult<Prisma.$parkingsPayload, S>

  type parkingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<parkingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingsCountAggregateInputType | true
    }

  export interface parkingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parkings'], meta: { name: 'parkings' } }
    /**
     * Find zero or one Parkings that matches the filter.
     * @param {parkingsFindUniqueArgs} args - Arguments to find a Parkings
     * @example
     * // Get one Parkings
     * const parkings = await prisma.parkings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends parkingsFindUniqueArgs>(args: SelectSubset<T, parkingsFindUniqueArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parkings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {parkingsFindUniqueOrThrowArgs} args - Arguments to find a Parkings
     * @example
     * // Get one Parkings
     * const parkings = await prisma.parkings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends parkingsFindUniqueOrThrowArgs>(args: SelectSubset<T, parkingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkingsFindFirstArgs} args - Arguments to find a Parkings
     * @example
     * // Get one Parkings
     * const parkings = await prisma.parkings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends parkingsFindFirstArgs>(args?: SelectSubset<T, parkingsFindFirstArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parkings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkingsFindFirstOrThrowArgs} args - Arguments to find a Parkings
     * @example
     * // Get one Parkings
     * const parkings = await prisma.parkings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends parkingsFindFirstOrThrowArgs>(args?: SelectSubset<T, parkingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parkings
     * const parkings = await prisma.parkings.findMany()
     * 
     * // Get first 10 Parkings
     * const parkings = await prisma.parkings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingsWithIdOnly = await prisma.parkings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends parkingsFindManyArgs>(args?: SelectSubset<T, parkingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parkings.
     * @param {parkingsCreateArgs} args - Arguments to create a Parkings.
     * @example
     * // Create one Parkings
     * const Parkings = await prisma.parkings.create({
     *   data: {
     *     // ... data to create a Parkings
     *   }
     * })
     * 
     */
    create<T extends parkingsCreateArgs>(args: SelectSubset<T, parkingsCreateArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parkings.
     * @param {parkingsCreateManyArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parkings = await prisma.parkings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends parkingsCreateManyArgs>(args?: SelectSubset<T, parkingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parkings and returns the data saved in the database.
     * @param {parkingsCreateManyAndReturnArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parkings = await prisma.parkings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parkings and only return the `id`
     * const parkingsWithIdOnly = await prisma.parkings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends parkingsCreateManyAndReturnArgs>(args?: SelectSubset<T, parkingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parkings.
     * @param {parkingsDeleteArgs} args - Arguments to delete one Parkings.
     * @example
     * // Delete one Parkings
     * const Parkings = await prisma.parkings.delete({
     *   where: {
     *     // ... filter to delete one Parkings
     *   }
     * })
     * 
     */
    delete<T extends parkingsDeleteArgs>(args: SelectSubset<T, parkingsDeleteArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parkings.
     * @param {parkingsUpdateArgs} args - Arguments to update one Parkings.
     * @example
     * // Update one Parkings
     * const parkings = await prisma.parkings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends parkingsUpdateArgs>(args: SelectSubset<T, parkingsUpdateArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parkings.
     * @param {parkingsDeleteManyArgs} args - Arguments to filter Parkings to delete.
     * @example
     * // Delete a few Parkings
     * const { count } = await prisma.parkings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends parkingsDeleteManyArgs>(args?: SelectSubset<T, parkingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parkings
     * const parkings = await prisma.parkings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends parkingsUpdateManyArgs>(args: SelectSubset<T, parkingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings and returns the data updated in the database.
     * @param {parkingsUpdateManyAndReturnArgs} args - Arguments to update many Parkings.
     * @example
     * // Update many Parkings
     * const parkings = await prisma.parkings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parkings and only return the `id`
     * const parkingsWithIdOnly = await prisma.parkings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends parkingsUpdateManyAndReturnArgs>(args: SelectSubset<T, parkingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parkings.
     * @param {parkingsUpsertArgs} args - Arguments to update or create a Parkings.
     * @example
     * // Update or create a Parkings
     * const parkings = await prisma.parkings.upsert({
     *   create: {
     *     // ... data to create a Parkings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parkings we want to update
     *   }
     * })
     */
    upsert<T extends parkingsUpsertArgs>(args: SelectSubset<T, parkingsUpsertArgs<ExtArgs>>): Prisma__parkingsClient<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkingsCountArgs} args - Arguments to filter Parkings to count.
     * @example
     * // Count the number of Parkings
     * const count = await prisma.parkings.count({
     *   where: {
     *     // ... the filter for the Parkings we want to count
     *   }
     * })
    **/
    count<T extends parkingsCountArgs>(
      args?: Subset<T, parkingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingsAggregateArgs>(args: Subset<T, ParkingsAggregateArgs>): Prisma.PrismaPromise<GetParkingsAggregateType<T>>

    /**
     * Group by Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends parkingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: parkingsGroupByArgs['orderBy'] }
        : { orderBy?: parkingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, parkingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the parkings model
   */
  readonly fields: parkingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parkings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__parkingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingslot<T extends parkinglotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, parkinglotDefaultArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the parkings model
   */
  interface parkingsFieldRefs {
    readonly id: FieldRef<"parkings", 'Int'>
    readonly userid: FieldRef<"parkings", 'Int'>
    readonly date: FieldRef<"parkings", 'DateTime'>
    readonly starttime: FieldRef<"parkings", 'DateTime'>
    readonly endtime: FieldRef<"parkings", 'DateTime'>
    readonly totaltime: FieldRef<"parkings", 'String'>
    readonly parkingslotid: FieldRef<"parkings", 'Int'>
    readonly carnumber: FieldRef<"parkings", 'String'>
    readonly status: FieldRef<"parkings", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * parkings findUnique
   */
  export type parkingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * Filter, which parkings to fetch.
     */
    where: parkingsWhereUniqueInput
  }

  /**
   * parkings findUniqueOrThrow
   */
  export type parkingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * Filter, which parkings to fetch.
     */
    where: parkingsWhereUniqueInput
  }

  /**
   * parkings findFirst
   */
  export type parkingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * Filter, which parkings to fetch.
     */
    where?: parkingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkings to fetch.
     */
    orderBy?: parkingsOrderByWithRelationInput | parkingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parkings.
     */
    cursor?: parkingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parkings.
     */
    distinct?: ParkingsScalarFieldEnum | ParkingsScalarFieldEnum[]
  }

  /**
   * parkings findFirstOrThrow
   */
  export type parkingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * Filter, which parkings to fetch.
     */
    where?: parkingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkings to fetch.
     */
    orderBy?: parkingsOrderByWithRelationInput | parkingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parkings.
     */
    cursor?: parkingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parkings.
     */
    distinct?: ParkingsScalarFieldEnum | ParkingsScalarFieldEnum[]
  }

  /**
   * parkings findMany
   */
  export type parkingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * Filter, which parkings to fetch.
     */
    where?: parkingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkings to fetch.
     */
    orderBy?: parkingsOrderByWithRelationInput | parkingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parkings.
     */
    cursor?: parkingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkings.
     */
    skip?: number
    distinct?: ParkingsScalarFieldEnum | ParkingsScalarFieldEnum[]
  }

  /**
   * parkings create
   */
  export type parkingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * The data needed to create a parkings.
     */
    data: XOR<parkingsCreateInput, parkingsUncheckedCreateInput>
  }

  /**
   * parkings createMany
   */
  export type parkingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many parkings.
     */
    data: parkingsCreateManyInput | parkingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * parkings createManyAndReturn
   */
  export type parkingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * The data used to create many parkings.
     */
    data: parkingsCreateManyInput | parkingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * parkings update
   */
  export type parkingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * The data needed to update a parkings.
     */
    data: XOR<parkingsUpdateInput, parkingsUncheckedUpdateInput>
    /**
     * Choose, which parkings to update.
     */
    where: parkingsWhereUniqueInput
  }

  /**
   * parkings updateMany
   */
  export type parkingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update parkings.
     */
    data: XOR<parkingsUpdateManyMutationInput, parkingsUncheckedUpdateManyInput>
    /**
     * Filter which parkings to update
     */
    where?: parkingsWhereInput
    /**
     * Limit how many parkings to update.
     */
    limit?: number
  }

  /**
   * parkings updateManyAndReturn
   */
  export type parkingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * The data used to update parkings.
     */
    data: XOR<parkingsUpdateManyMutationInput, parkingsUncheckedUpdateManyInput>
    /**
     * Filter which parkings to update
     */
    where?: parkingsWhereInput
    /**
     * Limit how many parkings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * parkings upsert
   */
  export type parkingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * The filter to search for the parkings to update in case it exists.
     */
    where: parkingsWhereUniqueInput
    /**
     * In case the parkings found by the `where` argument doesn't exist, create a new parkings with this data.
     */
    create: XOR<parkingsCreateInput, parkingsUncheckedCreateInput>
    /**
     * In case the parkings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parkingsUpdateInput, parkingsUncheckedUpdateInput>
  }

  /**
   * parkings delete
   */
  export type parkingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    /**
     * Filter which parkings to delete.
     */
    where: parkingsWhereUniqueInput
  }

  /**
   * parkings deleteMany
   */
  export type parkingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parkings to delete
     */
    where?: parkingsWhereInput
    /**
     * Limit how many parkings to delete.
     */
    limit?: number
  }

  /**
   * parkings without action
   */
  export type parkingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
  }


  /**
   * Model nonBooking_parking
   */

  export type AggregateNonBooking_parking = {
    _count: NonBooking_parkingCountAggregateOutputType | null
    _avg: NonBooking_parkingAvgAggregateOutputType | null
    _sum: NonBooking_parkingSumAggregateOutputType | null
    _min: NonBooking_parkingMinAggregateOutputType | null
    _max: NonBooking_parkingMaxAggregateOutputType | null
  }

  export type NonBooking_parkingAvgAggregateOutputType = {
    id: number | null
    parkinglslotid: number | null
  }

  export type NonBooking_parkingSumAggregateOutputType = {
    id: number | null
    parkinglslotid: number | null
  }

  export type NonBooking_parkingMinAggregateOutputType = {
    id: number | null
    startime: Date | null
    endtime: Date | null
    totaltime: string | null
    parkinglslotid: number | null
    carnumber: string | null
  }

  export type NonBooking_parkingMaxAggregateOutputType = {
    id: number | null
    startime: Date | null
    endtime: Date | null
    totaltime: string | null
    parkinglslotid: number | null
    carnumber: string | null
  }

  export type NonBooking_parkingCountAggregateOutputType = {
    id: number
    startime: number
    endtime: number
    totaltime: number
    parkinglslotid: number
    carnumber: number
    _all: number
  }


  export type NonBooking_parkingAvgAggregateInputType = {
    id?: true
    parkinglslotid?: true
  }

  export type NonBooking_parkingSumAggregateInputType = {
    id?: true
    parkinglslotid?: true
  }

  export type NonBooking_parkingMinAggregateInputType = {
    id?: true
    startime?: true
    endtime?: true
    totaltime?: true
    parkinglslotid?: true
    carnumber?: true
  }

  export type NonBooking_parkingMaxAggregateInputType = {
    id?: true
    startime?: true
    endtime?: true
    totaltime?: true
    parkinglslotid?: true
    carnumber?: true
  }

  export type NonBooking_parkingCountAggregateInputType = {
    id?: true
    startime?: true
    endtime?: true
    totaltime?: true
    parkinglslotid?: true
    carnumber?: true
    _all?: true
  }

  export type NonBooking_parkingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nonBooking_parking to aggregate.
     */
    where?: nonBooking_parkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nonBooking_parkings to fetch.
     */
    orderBy?: nonBooking_parkingOrderByWithRelationInput | nonBooking_parkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nonBooking_parkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nonBooking_parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nonBooking_parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nonBooking_parkings
    **/
    _count?: true | NonBooking_parkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NonBooking_parkingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NonBooking_parkingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NonBooking_parkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NonBooking_parkingMaxAggregateInputType
  }

  export type GetNonBooking_parkingAggregateType<T extends NonBooking_parkingAggregateArgs> = {
        [P in keyof T & keyof AggregateNonBooking_parking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNonBooking_parking[P]>
      : GetScalarType<T[P], AggregateNonBooking_parking[P]>
  }




  export type nonBooking_parkingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nonBooking_parkingWhereInput
    orderBy?: nonBooking_parkingOrderByWithAggregationInput | nonBooking_parkingOrderByWithAggregationInput[]
    by: NonBooking_parkingScalarFieldEnum[] | NonBooking_parkingScalarFieldEnum
    having?: nonBooking_parkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NonBooking_parkingCountAggregateInputType | true
    _avg?: NonBooking_parkingAvgAggregateInputType
    _sum?: NonBooking_parkingSumAggregateInputType
    _min?: NonBooking_parkingMinAggregateInputType
    _max?: NonBooking_parkingMaxAggregateInputType
  }

  export type NonBooking_parkingGroupByOutputType = {
    id: number
    startime: Date
    endtime: Date
    totaltime: string
    parkinglslotid: number
    carnumber: string
    _count: NonBooking_parkingCountAggregateOutputType | null
    _avg: NonBooking_parkingAvgAggregateOutputType | null
    _sum: NonBooking_parkingSumAggregateOutputType | null
    _min: NonBooking_parkingMinAggregateOutputType | null
    _max: NonBooking_parkingMaxAggregateOutputType | null
  }

  type GetNonBooking_parkingGroupByPayload<T extends nonBooking_parkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NonBooking_parkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NonBooking_parkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NonBooking_parkingGroupByOutputType[P]>
            : GetScalarType<T[P], NonBooking_parkingGroupByOutputType[P]>
        }
      >
    >


  export type nonBooking_parkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkinglslotid?: boolean
    carnumber?: boolean
    parkinglot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonBooking_parking"]>

  export type nonBooking_parkingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkinglslotid?: boolean
    carnumber?: boolean
    parkinglot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonBooking_parking"]>

  export type nonBooking_parkingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkinglslotid?: boolean
    carnumber?: boolean
    parkinglot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonBooking_parking"]>

  export type nonBooking_parkingSelectScalar = {
    id?: boolean
    startime?: boolean
    endtime?: boolean
    totaltime?: boolean
    parkinglslotid?: boolean
    carnumber?: boolean
  }

  export type nonBooking_parkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startime" | "endtime" | "totaltime" | "parkinglslotid" | "carnumber", ExtArgs["result"]["nonBooking_parking"]>
  export type nonBooking_parkingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkinglot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }
  export type nonBooking_parkingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkinglot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }
  export type nonBooking_parkingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkinglot?: boolean | parkinglotDefaultArgs<ExtArgs>
  }

  export type $nonBooking_parkingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nonBooking_parking"
    objects: {
      parkinglot: Prisma.$parkinglotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startime: Date
      endtime: Date
      totaltime: string
      parkinglslotid: number
      carnumber: string
    }, ExtArgs["result"]["nonBooking_parking"]>
    composites: {}
  }

  type nonBooking_parkingGetPayload<S extends boolean | null | undefined | nonBooking_parkingDefaultArgs> = $Result.GetResult<Prisma.$nonBooking_parkingPayload, S>

  type nonBooking_parkingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nonBooking_parkingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NonBooking_parkingCountAggregateInputType | true
    }

  export interface nonBooking_parkingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nonBooking_parking'], meta: { name: 'nonBooking_parking' } }
    /**
     * Find zero or one NonBooking_parking that matches the filter.
     * @param {nonBooking_parkingFindUniqueArgs} args - Arguments to find a NonBooking_parking
     * @example
     * // Get one NonBooking_parking
     * const nonBooking_parking = await prisma.nonBooking_parking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nonBooking_parkingFindUniqueArgs>(args: SelectSubset<T, nonBooking_parkingFindUniqueArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NonBooking_parking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nonBooking_parkingFindUniqueOrThrowArgs} args - Arguments to find a NonBooking_parking
     * @example
     * // Get one NonBooking_parking
     * const nonBooking_parking = await prisma.nonBooking_parking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nonBooking_parkingFindUniqueOrThrowArgs>(args: SelectSubset<T, nonBooking_parkingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NonBooking_parking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nonBooking_parkingFindFirstArgs} args - Arguments to find a NonBooking_parking
     * @example
     * // Get one NonBooking_parking
     * const nonBooking_parking = await prisma.nonBooking_parking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nonBooking_parkingFindFirstArgs>(args?: SelectSubset<T, nonBooking_parkingFindFirstArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NonBooking_parking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nonBooking_parkingFindFirstOrThrowArgs} args - Arguments to find a NonBooking_parking
     * @example
     * // Get one NonBooking_parking
     * const nonBooking_parking = await prisma.nonBooking_parking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nonBooking_parkingFindFirstOrThrowArgs>(args?: SelectSubset<T, nonBooking_parkingFindFirstOrThrowArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NonBooking_parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nonBooking_parkingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NonBooking_parkings
     * const nonBooking_parkings = await prisma.nonBooking_parking.findMany()
     * 
     * // Get first 10 NonBooking_parkings
     * const nonBooking_parkings = await prisma.nonBooking_parking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nonBooking_parkingWithIdOnly = await prisma.nonBooking_parking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nonBooking_parkingFindManyArgs>(args?: SelectSubset<T, nonBooking_parkingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NonBooking_parking.
     * @param {nonBooking_parkingCreateArgs} args - Arguments to create a NonBooking_parking.
     * @example
     * // Create one NonBooking_parking
     * const NonBooking_parking = await prisma.nonBooking_parking.create({
     *   data: {
     *     // ... data to create a NonBooking_parking
     *   }
     * })
     * 
     */
    create<T extends nonBooking_parkingCreateArgs>(args: SelectSubset<T, nonBooking_parkingCreateArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NonBooking_parkings.
     * @param {nonBooking_parkingCreateManyArgs} args - Arguments to create many NonBooking_parkings.
     * @example
     * // Create many NonBooking_parkings
     * const nonBooking_parking = await prisma.nonBooking_parking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nonBooking_parkingCreateManyArgs>(args?: SelectSubset<T, nonBooking_parkingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NonBooking_parkings and returns the data saved in the database.
     * @param {nonBooking_parkingCreateManyAndReturnArgs} args - Arguments to create many NonBooking_parkings.
     * @example
     * // Create many NonBooking_parkings
     * const nonBooking_parking = await prisma.nonBooking_parking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NonBooking_parkings and only return the `id`
     * const nonBooking_parkingWithIdOnly = await prisma.nonBooking_parking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nonBooking_parkingCreateManyAndReturnArgs>(args?: SelectSubset<T, nonBooking_parkingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NonBooking_parking.
     * @param {nonBooking_parkingDeleteArgs} args - Arguments to delete one NonBooking_parking.
     * @example
     * // Delete one NonBooking_parking
     * const NonBooking_parking = await prisma.nonBooking_parking.delete({
     *   where: {
     *     // ... filter to delete one NonBooking_parking
     *   }
     * })
     * 
     */
    delete<T extends nonBooking_parkingDeleteArgs>(args: SelectSubset<T, nonBooking_parkingDeleteArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NonBooking_parking.
     * @param {nonBooking_parkingUpdateArgs} args - Arguments to update one NonBooking_parking.
     * @example
     * // Update one NonBooking_parking
     * const nonBooking_parking = await prisma.nonBooking_parking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nonBooking_parkingUpdateArgs>(args: SelectSubset<T, nonBooking_parkingUpdateArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NonBooking_parkings.
     * @param {nonBooking_parkingDeleteManyArgs} args - Arguments to filter NonBooking_parkings to delete.
     * @example
     * // Delete a few NonBooking_parkings
     * const { count } = await prisma.nonBooking_parking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nonBooking_parkingDeleteManyArgs>(args?: SelectSubset<T, nonBooking_parkingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NonBooking_parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nonBooking_parkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NonBooking_parkings
     * const nonBooking_parking = await prisma.nonBooking_parking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nonBooking_parkingUpdateManyArgs>(args: SelectSubset<T, nonBooking_parkingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NonBooking_parkings and returns the data updated in the database.
     * @param {nonBooking_parkingUpdateManyAndReturnArgs} args - Arguments to update many NonBooking_parkings.
     * @example
     * // Update many NonBooking_parkings
     * const nonBooking_parking = await prisma.nonBooking_parking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NonBooking_parkings and only return the `id`
     * const nonBooking_parkingWithIdOnly = await prisma.nonBooking_parking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends nonBooking_parkingUpdateManyAndReturnArgs>(args: SelectSubset<T, nonBooking_parkingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NonBooking_parking.
     * @param {nonBooking_parkingUpsertArgs} args - Arguments to update or create a NonBooking_parking.
     * @example
     * // Update or create a NonBooking_parking
     * const nonBooking_parking = await prisma.nonBooking_parking.upsert({
     *   create: {
     *     // ... data to create a NonBooking_parking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NonBooking_parking we want to update
     *   }
     * })
     */
    upsert<T extends nonBooking_parkingUpsertArgs>(args: SelectSubset<T, nonBooking_parkingUpsertArgs<ExtArgs>>): Prisma__nonBooking_parkingClient<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NonBooking_parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nonBooking_parkingCountArgs} args - Arguments to filter NonBooking_parkings to count.
     * @example
     * // Count the number of NonBooking_parkings
     * const count = await prisma.nonBooking_parking.count({
     *   where: {
     *     // ... the filter for the NonBooking_parkings we want to count
     *   }
     * })
    **/
    count<T extends nonBooking_parkingCountArgs>(
      args?: Subset<T, nonBooking_parkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NonBooking_parkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NonBooking_parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonBooking_parkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NonBooking_parkingAggregateArgs>(args: Subset<T, NonBooking_parkingAggregateArgs>): Prisma.PrismaPromise<GetNonBooking_parkingAggregateType<T>>

    /**
     * Group by NonBooking_parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nonBooking_parkingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nonBooking_parkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nonBooking_parkingGroupByArgs['orderBy'] }
        : { orderBy?: nonBooking_parkingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nonBooking_parkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNonBooking_parkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nonBooking_parking model
   */
  readonly fields: nonBooking_parkingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nonBooking_parking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nonBooking_parkingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkinglot<T extends parkinglotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, parkinglotDefaultArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the nonBooking_parking model
   */
  interface nonBooking_parkingFieldRefs {
    readonly id: FieldRef<"nonBooking_parking", 'Int'>
    readonly startime: FieldRef<"nonBooking_parking", 'DateTime'>
    readonly endtime: FieldRef<"nonBooking_parking", 'DateTime'>
    readonly totaltime: FieldRef<"nonBooking_parking", 'String'>
    readonly parkinglslotid: FieldRef<"nonBooking_parking", 'Int'>
    readonly carnumber: FieldRef<"nonBooking_parking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * nonBooking_parking findUnique
   */
  export type nonBooking_parkingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * Filter, which nonBooking_parking to fetch.
     */
    where: nonBooking_parkingWhereUniqueInput
  }

  /**
   * nonBooking_parking findUniqueOrThrow
   */
  export type nonBooking_parkingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * Filter, which nonBooking_parking to fetch.
     */
    where: nonBooking_parkingWhereUniqueInput
  }

  /**
   * nonBooking_parking findFirst
   */
  export type nonBooking_parkingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * Filter, which nonBooking_parking to fetch.
     */
    where?: nonBooking_parkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nonBooking_parkings to fetch.
     */
    orderBy?: nonBooking_parkingOrderByWithRelationInput | nonBooking_parkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nonBooking_parkings.
     */
    cursor?: nonBooking_parkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nonBooking_parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nonBooking_parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nonBooking_parkings.
     */
    distinct?: NonBooking_parkingScalarFieldEnum | NonBooking_parkingScalarFieldEnum[]
  }

  /**
   * nonBooking_parking findFirstOrThrow
   */
  export type nonBooking_parkingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * Filter, which nonBooking_parking to fetch.
     */
    where?: nonBooking_parkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nonBooking_parkings to fetch.
     */
    orderBy?: nonBooking_parkingOrderByWithRelationInput | nonBooking_parkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nonBooking_parkings.
     */
    cursor?: nonBooking_parkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nonBooking_parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nonBooking_parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nonBooking_parkings.
     */
    distinct?: NonBooking_parkingScalarFieldEnum | NonBooking_parkingScalarFieldEnum[]
  }

  /**
   * nonBooking_parking findMany
   */
  export type nonBooking_parkingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * Filter, which nonBooking_parkings to fetch.
     */
    where?: nonBooking_parkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nonBooking_parkings to fetch.
     */
    orderBy?: nonBooking_parkingOrderByWithRelationInput | nonBooking_parkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nonBooking_parkings.
     */
    cursor?: nonBooking_parkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nonBooking_parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nonBooking_parkings.
     */
    skip?: number
    distinct?: NonBooking_parkingScalarFieldEnum | NonBooking_parkingScalarFieldEnum[]
  }

  /**
   * nonBooking_parking create
   */
  export type nonBooking_parkingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * The data needed to create a nonBooking_parking.
     */
    data: XOR<nonBooking_parkingCreateInput, nonBooking_parkingUncheckedCreateInput>
  }

  /**
   * nonBooking_parking createMany
   */
  export type nonBooking_parkingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nonBooking_parkings.
     */
    data: nonBooking_parkingCreateManyInput | nonBooking_parkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nonBooking_parking createManyAndReturn
   */
  export type nonBooking_parkingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * The data used to create many nonBooking_parkings.
     */
    data: nonBooking_parkingCreateManyInput | nonBooking_parkingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * nonBooking_parking update
   */
  export type nonBooking_parkingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * The data needed to update a nonBooking_parking.
     */
    data: XOR<nonBooking_parkingUpdateInput, nonBooking_parkingUncheckedUpdateInput>
    /**
     * Choose, which nonBooking_parking to update.
     */
    where: nonBooking_parkingWhereUniqueInput
  }

  /**
   * nonBooking_parking updateMany
   */
  export type nonBooking_parkingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nonBooking_parkings.
     */
    data: XOR<nonBooking_parkingUpdateManyMutationInput, nonBooking_parkingUncheckedUpdateManyInput>
    /**
     * Filter which nonBooking_parkings to update
     */
    where?: nonBooking_parkingWhereInput
    /**
     * Limit how many nonBooking_parkings to update.
     */
    limit?: number
  }

  /**
   * nonBooking_parking updateManyAndReturn
   */
  export type nonBooking_parkingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * The data used to update nonBooking_parkings.
     */
    data: XOR<nonBooking_parkingUpdateManyMutationInput, nonBooking_parkingUncheckedUpdateManyInput>
    /**
     * Filter which nonBooking_parkings to update
     */
    where?: nonBooking_parkingWhereInput
    /**
     * Limit how many nonBooking_parkings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * nonBooking_parking upsert
   */
  export type nonBooking_parkingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * The filter to search for the nonBooking_parking to update in case it exists.
     */
    where: nonBooking_parkingWhereUniqueInput
    /**
     * In case the nonBooking_parking found by the `where` argument doesn't exist, create a new nonBooking_parking with this data.
     */
    create: XOR<nonBooking_parkingCreateInput, nonBooking_parkingUncheckedCreateInput>
    /**
     * In case the nonBooking_parking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nonBooking_parkingUpdateInput, nonBooking_parkingUncheckedUpdateInput>
  }

  /**
   * nonBooking_parking delete
   */
  export type nonBooking_parkingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    /**
     * Filter which nonBooking_parking to delete.
     */
    where: nonBooking_parkingWhereUniqueInput
  }

  /**
   * nonBooking_parking deleteMany
   */
  export type nonBooking_parkingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nonBooking_parkings to delete
     */
    where?: nonBooking_parkingWhereInput
    /**
     * Limit how many nonBooking_parkings to delete.
     */
    limit?: number
  }

  /**
   * nonBooking_parking without action
   */
  export type nonBooking_parkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    title: string | null
    From: string | null
    message: string | null
    userid: number | null
    readen: boolean | null
    Notfifcationtype: $Enums.NotificationType | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    title: string | null
    From: string | null
    message: string | null
    userid: number | null
    readen: boolean | null
    Notfifcationtype: $Enums.NotificationType | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    timestamp: number
    title: number
    From: number
    message: number
    userid: number
    readen: number
    Notfifcationtype: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    userid?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    userid?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    timestamp?: true
    title?: true
    From?: true
    message?: true
    userid?: true
    readen?: true
    Notfifcationtype?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    timestamp?: true
    title?: true
    From?: true
    message?: true
    userid?: true
    readen?: true
    Notfifcationtype?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    timestamp?: true
    title?: true
    From?: true
    message?: true
    userid?: true
    readen?: true
    Notfifcationtype?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    timestamp: Date
    title: string
    From: string
    message: string
    userid: number
    readen: boolean
    Notfifcationtype: $Enums.NotificationType
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    title?: boolean
    From?: boolean
    message?: boolean
    userid?: boolean
    readen?: boolean
    Notfifcationtype?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    title?: boolean
    From?: boolean
    message?: boolean
    userid?: boolean
    readen?: boolean
    Notfifcationtype?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    title?: boolean
    From?: boolean
    message?: boolean
    userid?: boolean
    readen?: boolean
    Notfifcationtype?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    timestamp?: boolean
    title?: boolean
    From?: boolean
    message?: boolean
    userid?: boolean
    readen?: boolean
    Notfifcationtype?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "title" | "From" | "message" | "userid" | "readen" | "Notfifcationtype", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      title: string
      From: string
      message: string
      userid: number
      readen: boolean
      Notfifcationtype: $Enums.NotificationType
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly timestamp: FieldRef<"notifications", 'DateTime'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly From: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly userid: FieldRef<"notifications", 'Int'>
    readonly readen: FieldRef<"notifications", 'Boolean'>
    readonly Notfifcationtype: FieldRef<"notifications", 'NotificationType'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model parkinglot
   */

  export type AggregateParkinglot = {
    _count: ParkinglotCountAggregateOutputType | null
    _avg: ParkinglotAvgAggregateOutputType | null
    _sum: ParkinglotSumAggregateOutputType | null
    _min: ParkinglotMinAggregateOutputType | null
    _max: ParkinglotMaxAggregateOutputType | null
  }

  export type ParkinglotAvgAggregateOutputType = {
    id: number | null
    longitude: number | null
    latitude: number | null
    merchantid: number | null
    totalslots: number | null
    occupiedslots: number | null
    vacantslots: number | null
  }

  export type ParkinglotSumAggregateOutputType = {
    id: number | null
    longitude: number | null
    latitude: number | null
    merchantid: number | null
    totalslots: number | null
    occupiedslots: number | null
    vacantslots: number | null
  }

  export type ParkinglotMinAggregateOutputType = {
    id: number | null
    Name: string | null
    price: string | null
    Adress: string | null
    longitude: number | null
    latitude: number | null
    merchantid: number | null
    totalslots: number | null
    occupiedslots: number | null
    vacantslots: number | null
    isempty: boolean | null
  }

  export type ParkinglotMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    price: string | null
    Adress: string | null
    longitude: number | null
    latitude: number | null
    merchantid: number | null
    totalslots: number | null
    occupiedslots: number | null
    vacantslots: number | null
    isempty: boolean | null
  }

  export type ParkinglotCountAggregateOutputType = {
    id: number
    Name: number
    price: number
    Adress: number
    longitude: number
    latitude: number
    merchantid: number
    totalslots: number
    occupiedslots: number
    vacantslots: number
    isempty: number
    _all: number
  }


  export type ParkinglotAvgAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
    merchantid?: true
    totalslots?: true
    occupiedslots?: true
    vacantslots?: true
  }

  export type ParkinglotSumAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
    merchantid?: true
    totalslots?: true
    occupiedslots?: true
    vacantslots?: true
  }

  export type ParkinglotMinAggregateInputType = {
    id?: true
    Name?: true
    price?: true
    Adress?: true
    longitude?: true
    latitude?: true
    merchantid?: true
    totalslots?: true
    occupiedslots?: true
    vacantslots?: true
    isempty?: true
  }

  export type ParkinglotMaxAggregateInputType = {
    id?: true
    Name?: true
    price?: true
    Adress?: true
    longitude?: true
    latitude?: true
    merchantid?: true
    totalslots?: true
    occupiedslots?: true
    vacantslots?: true
    isempty?: true
  }

  export type ParkinglotCountAggregateInputType = {
    id?: true
    Name?: true
    price?: true
    Adress?: true
    longitude?: true
    latitude?: true
    merchantid?: true
    totalslots?: true
    occupiedslots?: true
    vacantslots?: true
    isempty?: true
    _all?: true
  }

  export type ParkinglotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parkinglot to aggregate.
     */
    where?: parkinglotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkinglots to fetch.
     */
    orderBy?: parkinglotOrderByWithRelationInput | parkinglotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: parkinglotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkinglots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkinglots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parkinglots
    **/
    _count?: true | ParkinglotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkinglotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkinglotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkinglotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkinglotMaxAggregateInputType
  }

  export type GetParkinglotAggregateType<T extends ParkinglotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkinglot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkinglot[P]>
      : GetScalarType<T[P], AggregateParkinglot[P]>
  }




  export type parkinglotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parkinglotWhereInput
    orderBy?: parkinglotOrderByWithAggregationInput | parkinglotOrderByWithAggregationInput[]
    by: ParkinglotScalarFieldEnum[] | ParkinglotScalarFieldEnum
    having?: parkinglotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkinglotCountAggregateInputType | true
    _avg?: ParkinglotAvgAggregateInputType
    _sum?: ParkinglotSumAggregateInputType
    _min?: ParkinglotMinAggregateInputType
    _max?: ParkinglotMaxAggregateInputType
  }

  export type ParkinglotGroupByOutputType = {
    id: number
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    merchantid: number
    totalslots: number
    occupiedslots: number
    vacantslots: number
    isempty: boolean
    _count: ParkinglotCountAggregateOutputType | null
    _avg: ParkinglotAvgAggregateOutputType | null
    _sum: ParkinglotSumAggregateOutputType | null
    _min: ParkinglotMinAggregateOutputType | null
    _max: ParkinglotMaxAggregateOutputType | null
  }

  type GetParkinglotGroupByPayload<T extends parkinglotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkinglotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkinglotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkinglotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkinglotGroupByOutputType[P]>
        }
      >
    >


  export type parkinglotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    price?: boolean
    Adress?: boolean
    longitude?: boolean
    latitude?: boolean
    merchantid?: boolean
    totalslots?: boolean
    occupiedslots?: boolean
    vacantslots?: boolean
    isempty?: boolean
    merchant?: boolean | merchantDefaultArgs<ExtArgs>
    parkings?: boolean | parkinglot$parkingsArgs<ExtArgs>
    nonBooking_parking?: boolean | parkinglot$nonBooking_parkingArgs<ExtArgs>
    _count?: boolean | ParkinglotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkinglot"]>

  export type parkinglotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    price?: boolean
    Adress?: boolean
    longitude?: boolean
    latitude?: boolean
    merchantid?: boolean
    totalslots?: boolean
    occupiedslots?: boolean
    vacantslots?: boolean
    isempty?: boolean
    merchant?: boolean | merchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkinglot"]>

  export type parkinglotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    price?: boolean
    Adress?: boolean
    longitude?: boolean
    latitude?: boolean
    merchantid?: boolean
    totalslots?: boolean
    occupiedslots?: boolean
    vacantslots?: boolean
    isempty?: boolean
    merchant?: boolean | merchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkinglot"]>

  export type parkinglotSelectScalar = {
    id?: boolean
    Name?: boolean
    price?: boolean
    Adress?: boolean
    longitude?: boolean
    latitude?: boolean
    merchantid?: boolean
    totalslots?: boolean
    occupiedslots?: boolean
    vacantslots?: boolean
    isempty?: boolean
  }

  export type parkinglotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "price" | "Adress" | "longitude" | "latitude" | "merchantid" | "totalslots" | "occupiedslots" | "vacantslots" | "isempty", ExtArgs["result"]["parkinglot"]>
  export type parkinglotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | merchantDefaultArgs<ExtArgs>
    parkings?: boolean | parkinglot$parkingsArgs<ExtArgs>
    nonBooking_parking?: boolean | parkinglot$nonBooking_parkingArgs<ExtArgs>
    _count?: boolean | ParkinglotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type parkinglotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | merchantDefaultArgs<ExtArgs>
  }
  export type parkinglotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | merchantDefaultArgs<ExtArgs>
  }

  export type $parkinglotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parkinglot"
    objects: {
      merchant: Prisma.$merchantPayload<ExtArgs>
      parkings: Prisma.$parkingsPayload<ExtArgs>[]
      nonBooking_parking: Prisma.$nonBooking_parkingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      price: string
      Adress: string
      longitude: number
      latitude: number
      merchantid: number
      totalslots: number
      occupiedslots: number
      vacantslots: number
      isempty: boolean
    }, ExtArgs["result"]["parkinglot"]>
    composites: {}
  }

  type parkinglotGetPayload<S extends boolean | null | undefined | parkinglotDefaultArgs> = $Result.GetResult<Prisma.$parkinglotPayload, S>

  type parkinglotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<parkinglotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkinglotCountAggregateInputType | true
    }

  export interface parkinglotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parkinglot'], meta: { name: 'parkinglot' } }
    /**
     * Find zero or one Parkinglot that matches the filter.
     * @param {parkinglotFindUniqueArgs} args - Arguments to find a Parkinglot
     * @example
     * // Get one Parkinglot
     * const parkinglot = await prisma.parkinglot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends parkinglotFindUniqueArgs>(args: SelectSubset<T, parkinglotFindUniqueArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parkinglot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {parkinglotFindUniqueOrThrowArgs} args - Arguments to find a Parkinglot
     * @example
     * // Get one Parkinglot
     * const parkinglot = await prisma.parkinglot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends parkinglotFindUniqueOrThrowArgs>(args: SelectSubset<T, parkinglotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parkinglot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkinglotFindFirstArgs} args - Arguments to find a Parkinglot
     * @example
     * // Get one Parkinglot
     * const parkinglot = await prisma.parkinglot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends parkinglotFindFirstArgs>(args?: SelectSubset<T, parkinglotFindFirstArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parkinglot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkinglotFindFirstOrThrowArgs} args - Arguments to find a Parkinglot
     * @example
     * // Get one Parkinglot
     * const parkinglot = await prisma.parkinglot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends parkinglotFindFirstOrThrowArgs>(args?: SelectSubset<T, parkinglotFindFirstOrThrowArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parkinglots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkinglotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parkinglots
     * const parkinglots = await prisma.parkinglot.findMany()
     * 
     * // Get first 10 Parkinglots
     * const parkinglots = await prisma.parkinglot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkinglotWithIdOnly = await prisma.parkinglot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends parkinglotFindManyArgs>(args?: SelectSubset<T, parkinglotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parkinglot.
     * @param {parkinglotCreateArgs} args - Arguments to create a Parkinglot.
     * @example
     * // Create one Parkinglot
     * const Parkinglot = await prisma.parkinglot.create({
     *   data: {
     *     // ... data to create a Parkinglot
     *   }
     * })
     * 
     */
    create<T extends parkinglotCreateArgs>(args: SelectSubset<T, parkinglotCreateArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parkinglots.
     * @param {parkinglotCreateManyArgs} args - Arguments to create many Parkinglots.
     * @example
     * // Create many Parkinglots
     * const parkinglot = await prisma.parkinglot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends parkinglotCreateManyArgs>(args?: SelectSubset<T, parkinglotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parkinglots and returns the data saved in the database.
     * @param {parkinglotCreateManyAndReturnArgs} args - Arguments to create many Parkinglots.
     * @example
     * // Create many Parkinglots
     * const parkinglot = await prisma.parkinglot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parkinglots and only return the `id`
     * const parkinglotWithIdOnly = await prisma.parkinglot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends parkinglotCreateManyAndReturnArgs>(args?: SelectSubset<T, parkinglotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parkinglot.
     * @param {parkinglotDeleteArgs} args - Arguments to delete one Parkinglot.
     * @example
     * // Delete one Parkinglot
     * const Parkinglot = await prisma.parkinglot.delete({
     *   where: {
     *     // ... filter to delete one Parkinglot
     *   }
     * })
     * 
     */
    delete<T extends parkinglotDeleteArgs>(args: SelectSubset<T, parkinglotDeleteArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parkinglot.
     * @param {parkinglotUpdateArgs} args - Arguments to update one Parkinglot.
     * @example
     * // Update one Parkinglot
     * const parkinglot = await prisma.parkinglot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends parkinglotUpdateArgs>(args: SelectSubset<T, parkinglotUpdateArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parkinglots.
     * @param {parkinglotDeleteManyArgs} args - Arguments to filter Parkinglots to delete.
     * @example
     * // Delete a few Parkinglots
     * const { count } = await prisma.parkinglot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends parkinglotDeleteManyArgs>(args?: SelectSubset<T, parkinglotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkinglots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkinglotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parkinglots
     * const parkinglot = await prisma.parkinglot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends parkinglotUpdateManyArgs>(args: SelectSubset<T, parkinglotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkinglots and returns the data updated in the database.
     * @param {parkinglotUpdateManyAndReturnArgs} args - Arguments to update many Parkinglots.
     * @example
     * // Update many Parkinglots
     * const parkinglot = await prisma.parkinglot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parkinglots and only return the `id`
     * const parkinglotWithIdOnly = await prisma.parkinglot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends parkinglotUpdateManyAndReturnArgs>(args: SelectSubset<T, parkinglotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parkinglot.
     * @param {parkinglotUpsertArgs} args - Arguments to update or create a Parkinglot.
     * @example
     * // Update or create a Parkinglot
     * const parkinglot = await prisma.parkinglot.upsert({
     *   create: {
     *     // ... data to create a Parkinglot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parkinglot we want to update
     *   }
     * })
     */
    upsert<T extends parkinglotUpsertArgs>(args: SelectSubset<T, parkinglotUpsertArgs<ExtArgs>>): Prisma__parkinglotClient<$Result.GetResult<Prisma.$parkinglotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parkinglots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkinglotCountArgs} args - Arguments to filter Parkinglots to count.
     * @example
     * // Count the number of Parkinglots
     * const count = await prisma.parkinglot.count({
     *   where: {
     *     // ... the filter for the Parkinglots we want to count
     *   }
     * })
    **/
    count<T extends parkinglotCountArgs>(
      args?: Subset<T, parkinglotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkinglotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parkinglot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinglotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkinglotAggregateArgs>(args: Subset<T, ParkinglotAggregateArgs>): Prisma.PrismaPromise<GetParkinglotAggregateType<T>>

    /**
     * Group by Parkinglot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parkinglotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends parkinglotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: parkinglotGroupByArgs['orderBy'] }
        : { orderBy?: parkinglotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, parkinglotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkinglotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the parkinglot model
   */
  readonly fields: parkinglotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parkinglot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__parkinglotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends merchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, merchantDefaultArgs<ExtArgs>>): Prisma__merchantClient<$Result.GetResult<Prisma.$merchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkings<T extends parkinglot$parkingsArgs<ExtArgs> = {}>(args?: Subset<T, parkinglot$parkingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parkingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nonBooking_parking<T extends parkinglot$nonBooking_parkingArgs<ExtArgs> = {}>(args?: Subset<T, parkinglot$nonBooking_parkingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nonBooking_parkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the parkinglot model
   */
  interface parkinglotFieldRefs {
    readonly id: FieldRef<"parkinglot", 'Int'>
    readonly Name: FieldRef<"parkinglot", 'String'>
    readonly price: FieldRef<"parkinglot", 'String'>
    readonly Adress: FieldRef<"parkinglot", 'String'>
    readonly longitude: FieldRef<"parkinglot", 'Float'>
    readonly latitude: FieldRef<"parkinglot", 'Float'>
    readonly merchantid: FieldRef<"parkinglot", 'Int'>
    readonly totalslots: FieldRef<"parkinglot", 'Int'>
    readonly occupiedslots: FieldRef<"parkinglot", 'Int'>
    readonly vacantslots: FieldRef<"parkinglot", 'Int'>
    readonly isempty: FieldRef<"parkinglot", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * parkinglot findUnique
   */
  export type parkinglotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * Filter, which parkinglot to fetch.
     */
    where: parkinglotWhereUniqueInput
  }

  /**
   * parkinglot findUniqueOrThrow
   */
  export type parkinglotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * Filter, which parkinglot to fetch.
     */
    where: parkinglotWhereUniqueInput
  }

  /**
   * parkinglot findFirst
   */
  export type parkinglotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * Filter, which parkinglot to fetch.
     */
    where?: parkinglotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkinglots to fetch.
     */
    orderBy?: parkinglotOrderByWithRelationInput | parkinglotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parkinglots.
     */
    cursor?: parkinglotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkinglots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkinglots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parkinglots.
     */
    distinct?: ParkinglotScalarFieldEnum | ParkinglotScalarFieldEnum[]
  }

  /**
   * parkinglot findFirstOrThrow
   */
  export type parkinglotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * Filter, which parkinglot to fetch.
     */
    where?: parkinglotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkinglots to fetch.
     */
    orderBy?: parkinglotOrderByWithRelationInput | parkinglotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parkinglots.
     */
    cursor?: parkinglotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkinglots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkinglots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parkinglots.
     */
    distinct?: ParkinglotScalarFieldEnum | ParkinglotScalarFieldEnum[]
  }

  /**
   * parkinglot findMany
   */
  export type parkinglotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * Filter, which parkinglots to fetch.
     */
    where?: parkinglotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parkinglots to fetch.
     */
    orderBy?: parkinglotOrderByWithRelationInput | parkinglotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parkinglots.
     */
    cursor?: parkinglotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parkinglots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parkinglots.
     */
    skip?: number
    distinct?: ParkinglotScalarFieldEnum | ParkinglotScalarFieldEnum[]
  }

  /**
   * parkinglot create
   */
  export type parkinglotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * The data needed to create a parkinglot.
     */
    data: XOR<parkinglotCreateInput, parkinglotUncheckedCreateInput>
  }

  /**
   * parkinglot createMany
   */
  export type parkinglotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many parkinglots.
     */
    data: parkinglotCreateManyInput | parkinglotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * parkinglot createManyAndReturn
   */
  export type parkinglotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * The data used to create many parkinglots.
     */
    data: parkinglotCreateManyInput | parkinglotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * parkinglot update
   */
  export type parkinglotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * The data needed to update a parkinglot.
     */
    data: XOR<parkinglotUpdateInput, parkinglotUncheckedUpdateInput>
    /**
     * Choose, which parkinglot to update.
     */
    where: parkinglotWhereUniqueInput
  }

  /**
   * parkinglot updateMany
   */
  export type parkinglotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update parkinglots.
     */
    data: XOR<parkinglotUpdateManyMutationInput, parkinglotUncheckedUpdateManyInput>
    /**
     * Filter which parkinglots to update
     */
    where?: parkinglotWhereInput
    /**
     * Limit how many parkinglots to update.
     */
    limit?: number
  }

  /**
   * parkinglot updateManyAndReturn
   */
  export type parkinglotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * The data used to update parkinglots.
     */
    data: XOR<parkinglotUpdateManyMutationInput, parkinglotUncheckedUpdateManyInput>
    /**
     * Filter which parkinglots to update
     */
    where?: parkinglotWhereInput
    /**
     * Limit how many parkinglots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * parkinglot upsert
   */
  export type parkinglotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * The filter to search for the parkinglot to update in case it exists.
     */
    where: parkinglotWhereUniqueInput
    /**
     * In case the parkinglot found by the `where` argument doesn't exist, create a new parkinglot with this data.
     */
    create: XOR<parkinglotCreateInput, parkinglotUncheckedCreateInput>
    /**
     * In case the parkinglot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parkinglotUpdateInput, parkinglotUncheckedUpdateInput>
  }

  /**
   * parkinglot delete
   */
  export type parkinglotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
    /**
     * Filter which parkinglot to delete.
     */
    where: parkinglotWhereUniqueInput
  }

  /**
   * parkinglot deleteMany
   */
  export type parkinglotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parkinglots to delete
     */
    where?: parkinglotWhereInput
    /**
     * Limit how many parkinglots to delete.
     */
    limit?: number
  }

  /**
   * parkinglot.parkings
   */
  export type parkinglot$parkingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkings
     */
    select?: parkingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkings
     */
    omit?: parkingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkingsInclude<ExtArgs> | null
    where?: parkingsWhereInput
    orderBy?: parkingsOrderByWithRelationInput | parkingsOrderByWithRelationInput[]
    cursor?: parkingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingsScalarFieldEnum | ParkingsScalarFieldEnum[]
  }

  /**
   * parkinglot.nonBooking_parking
   */
  export type parkinglot$nonBooking_parkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nonBooking_parking
     */
    select?: nonBooking_parkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nonBooking_parking
     */
    omit?: nonBooking_parkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nonBooking_parkingInclude<ExtArgs> | null
    where?: nonBooking_parkingWhereInput
    orderBy?: nonBooking_parkingOrderByWithRelationInput | nonBooking_parkingOrderByWithRelationInput[]
    cursor?: nonBooking_parkingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NonBooking_parkingScalarFieldEnum | NonBooking_parkingScalarFieldEnum[]
  }

  /**
   * parkinglot without action
   */
  export type parkinglotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parkinglot
     */
    select?: parkinglotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parkinglot
     */
    omit?: parkinglotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parkinglotInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    number: 'number',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    password: 'password'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const CardetailsScalarFieldEnum: {
    id: 'id',
    Carnumber: 'Carnumber',
    ownerid: 'ownerid',
    iselectric: 'iselectric',
    isparked: 'isparked'
  };

  export type CardetailsScalarFieldEnum = (typeof CardetailsScalarFieldEnum)[keyof typeof CardetailsScalarFieldEnum]


  export const ParkingsScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    date: 'date',
    starttime: 'starttime',
    endtime: 'endtime',
    totaltime: 'totaltime',
    parkingslotid: 'parkingslotid',
    carnumber: 'carnumber',
    status: 'status'
  };

  export type ParkingsScalarFieldEnum = (typeof ParkingsScalarFieldEnum)[keyof typeof ParkingsScalarFieldEnum]


  export const NonBooking_parkingScalarFieldEnum: {
    id: 'id',
    startime: 'startime',
    endtime: 'endtime',
    totaltime: 'totaltime',
    parkinglslotid: 'parkinglslotid',
    carnumber: 'carnumber'
  };

  export type NonBooking_parkingScalarFieldEnum = (typeof NonBooking_parkingScalarFieldEnum)[keyof typeof NonBooking_parkingScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    title: 'title',
    From: 'From',
    message: 'message',
    userid: 'userid',
    readen: 'readen',
    Notfifcationtype: 'Notfifcationtype'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const ParkinglotScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    price: 'price',
    Adress: 'Adress',
    longitude: 'longitude',
    latitude: 'latitude',
    merchantid: 'merchantid',
    totalslots: 'totalslots',
    occupiedslots: 'occupiedslots',
    vacantslots: 'vacantslots',
    isempty: 'isempty'
  };

  export type ParkinglotScalarFieldEnum = (typeof ParkinglotScalarFieldEnum)[keyof typeof ParkinglotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cardetails?: CardetailsListRelationFilter
    parking?: ParkingsListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    cardetails?: cardetailsOrderByRelationAggregateInput
    parking?: parkingsOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    cardetails?: CardetailsListRelationFilter
    parking?: ParkingsListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "id" | "email" | "number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    number?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type merchantWhereInput = {
    AND?: merchantWhereInput | merchantWhereInput[]
    OR?: merchantWhereInput[]
    NOT?: merchantWhereInput | merchantWhereInput[]
    id?: IntFilter<"merchant"> | number
    name?: StringFilter<"merchant"> | string
    number?: StringFilter<"merchant"> | string
    password?: StringFilter<"merchant"> | string
    parkinglot?: ParkinglotListRelationFilter
  }

  export type merchantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    parkinglot?: parkinglotOrderByRelationAggregateInput
  }

  export type merchantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: merchantWhereInput | merchantWhereInput[]
    OR?: merchantWhereInput[]
    NOT?: merchantWhereInput | merchantWhereInput[]
    name?: StringFilter<"merchant"> | string
    number?: StringFilter<"merchant"> | string
    password?: StringFilter<"merchant"> | string
    parkinglot?: ParkinglotListRelationFilter
  }, "id">

  export type merchantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    _count?: merchantCountOrderByAggregateInput
    _avg?: merchantAvgOrderByAggregateInput
    _max?: merchantMaxOrderByAggregateInput
    _min?: merchantMinOrderByAggregateInput
    _sum?: merchantSumOrderByAggregateInput
  }

  export type merchantScalarWhereWithAggregatesInput = {
    AND?: merchantScalarWhereWithAggregatesInput | merchantScalarWhereWithAggregatesInput[]
    OR?: merchantScalarWhereWithAggregatesInput[]
    NOT?: merchantScalarWhereWithAggregatesInput | merchantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"merchant"> | number
    name?: StringWithAggregatesFilter<"merchant"> | string
    number?: StringWithAggregatesFilter<"merchant"> | string
    password?: StringWithAggregatesFilter<"merchant"> | string
  }

  export type cardetailsWhereInput = {
    AND?: cardetailsWhereInput | cardetailsWhereInput[]
    OR?: cardetailsWhereInput[]
    NOT?: cardetailsWhereInput | cardetailsWhereInput[]
    id?: IntFilter<"cardetails"> | number
    Carnumber?: StringFilter<"cardetails"> | string
    ownerid?: IntFilter<"cardetails"> | number
    iselectric?: BoolFilter<"cardetails"> | boolean
    isparked?: BoolFilter<"cardetails"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type cardetailsOrderByWithRelationInput = {
    id?: SortOrder
    Carnumber?: SortOrder
    ownerid?: SortOrder
    iselectric?: SortOrder
    isparked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type cardetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Carnumber?: string
    AND?: cardetailsWhereInput | cardetailsWhereInput[]
    OR?: cardetailsWhereInput[]
    NOT?: cardetailsWhereInput | cardetailsWhereInput[]
    ownerid?: IntFilter<"cardetails"> | number
    iselectric?: BoolFilter<"cardetails"> | boolean
    isparked?: BoolFilter<"cardetails"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "Carnumber">

  export type cardetailsOrderByWithAggregationInput = {
    id?: SortOrder
    Carnumber?: SortOrder
    ownerid?: SortOrder
    iselectric?: SortOrder
    isparked?: SortOrder
    _count?: cardetailsCountOrderByAggregateInput
    _avg?: cardetailsAvgOrderByAggregateInput
    _max?: cardetailsMaxOrderByAggregateInput
    _min?: cardetailsMinOrderByAggregateInput
    _sum?: cardetailsSumOrderByAggregateInput
  }

  export type cardetailsScalarWhereWithAggregatesInput = {
    AND?: cardetailsScalarWhereWithAggregatesInput | cardetailsScalarWhereWithAggregatesInput[]
    OR?: cardetailsScalarWhereWithAggregatesInput[]
    NOT?: cardetailsScalarWhereWithAggregatesInput | cardetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cardetails"> | number
    Carnumber?: StringWithAggregatesFilter<"cardetails"> | string
    ownerid?: IntWithAggregatesFilter<"cardetails"> | number
    iselectric?: BoolWithAggregatesFilter<"cardetails"> | boolean
    isparked?: BoolWithAggregatesFilter<"cardetails"> | boolean
  }

  export type parkingsWhereInput = {
    AND?: parkingsWhereInput | parkingsWhereInput[]
    OR?: parkingsWhereInput[]
    NOT?: parkingsWhereInput | parkingsWhereInput[]
    id?: IntFilter<"parkings"> | number
    userid?: IntFilter<"parkings"> | number
    date?: DateTimeFilter<"parkings"> | Date | string
    starttime?: DateTimeFilter<"parkings"> | Date | string
    endtime?: DateTimeFilter<"parkings"> | Date | string
    totaltime?: StringFilter<"parkings"> | string
    parkingslotid?: IntFilter<"parkings"> | number
    carnumber?: StringFilter<"parkings"> | string
    status?: EnumStatusFilter<"parkings"> | $Enums.Status
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingslot?: XOR<ParkinglotScalarRelationFilter, parkinglotWhereInput>
  }

  export type parkingsOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    date?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkingslotid?: SortOrder
    carnumber?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    parkingslot?: parkinglotOrderByWithRelationInput
  }

  export type parkingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: parkingsWhereInput | parkingsWhereInput[]
    OR?: parkingsWhereInput[]
    NOT?: parkingsWhereInput | parkingsWhereInput[]
    userid?: IntFilter<"parkings"> | number
    date?: DateTimeFilter<"parkings"> | Date | string
    starttime?: DateTimeFilter<"parkings"> | Date | string
    endtime?: DateTimeFilter<"parkings"> | Date | string
    totaltime?: StringFilter<"parkings"> | string
    parkingslotid?: IntFilter<"parkings"> | number
    carnumber?: StringFilter<"parkings"> | string
    status?: EnumStatusFilter<"parkings"> | $Enums.Status
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingslot?: XOR<ParkinglotScalarRelationFilter, parkinglotWhereInput>
  }, "id">

  export type parkingsOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    date?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkingslotid?: SortOrder
    carnumber?: SortOrder
    status?: SortOrder
    _count?: parkingsCountOrderByAggregateInput
    _avg?: parkingsAvgOrderByAggregateInput
    _max?: parkingsMaxOrderByAggregateInput
    _min?: parkingsMinOrderByAggregateInput
    _sum?: parkingsSumOrderByAggregateInput
  }

  export type parkingsScalarWhereWithAggregatesInput = {
    AND?: parkingsScalarWhereWithAggregatesInput | parkingsScalarWhereWithAggregatesInput[]
    OR?: parkingsScalarWhereWithAggregatesInput[]
    NOT?: parkingsScalarWhereWithAggregatesInput | parkingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"parkings"> | number
    userid?: IntWithAggregatesFilter<"parkings"> | number
    date?: DateTimeWithAggregatesFilter<"parkings"> | Date | string
    starttime?: DateTimeWithAggregatesFilter<"parkings"> | Date | string
    endtime?: DateTimeWithAggregatesFilter<"parkings"> | Date | string
    totaltime?: StringWithAggregatesFilter<"parkings"> | string
    parkingslotid?: IntWithAggregatesFilter<"parkings"> | number
    carnumber?: StringWithAggregatesFilter<"parkings"> | string
    status?: EnumStatusWithAggregatesFilter<"parkings"> | $Enums.Status
  }

  export type nonBooking_parkingWhereInput = {
    AND?: nonBooking_parkingWhereInput | nonBooking_parkingWhereInput[]
    OR?: nonBooking_parkingWhereInput[]
    NOT?: nonBooking_parkingWhereInput | nonBooking_parkingWhereInput[]
    id?: IntFilter<"nonBooking_parking"> | number
    startime?: DateTimeFilter<"nonBooking_parking"> | Date | string
    endtime?: DateTimeFilter<"nonBooking_parking"> | Date | string
    totaltime?: StringFilter<"nonBooking_parking"> | string
    parkinglslotid?: IntFilter<"nonBooking_parking"> | number
    carnumber?: StringFilter<"nonBooking_parking"> | string
    parkinglot?: XOR<ParkinglotScalarRelationFilter, parkinglotWhereInput>
  }

  export type nonBooking_parkingOrderByWithRelationInput = {
    id?: SortOrder
    startime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkinglslotid?: SortOrder
    carnumber?: SortOrder
    parkinglot?: parkinglotOrderByWithRelationInput
  }

  export type nonBooking_parkingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: nonBooking_parkingWhereInput | nonBooking_parkingWhereInput[]
    OR?: nonBooking_parkingWhereInput[]
    NOT?: nonBooking_parkingWhereInput | nonBooking_parkingWhereInput[]
    startime?: DateTimeFilter<"nonBooking_parking"> | Date | string
    endtime?: DateTimeFilter<"nonBooking_parking"> | Date | string
    totaltime?: StringFilter<"nonBooking_parking"> | string
    parkinglslotid?: IntFilter<"nonBooking_parking"> | number
    carnumber?: StringFilter<"nonBooking_parking"> | string
    parkinglot?: XOR<ParkinglotScalarRelationFilter, parkinglotWhereInput>
  }, "id">

  export type nonBooking_parkingOrderByWithAggregationInput = {
    id?: SortOrder
    startime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkinglslotid?: SortOrder
    carnumber?: SortOrder
    _count?: nonBooking_parkingCountOrderByAggregateInput
    _avg?: nonBooking_parkingAvgOrderByAggregateInput
    _max?: nonBooking_parkingMaxOrderByAggregateInput
    _min?: nonBooking_parkingMinOrderByAggregateInput
    _sum?: nonBooking_parkingSumOrderByAggregateInput
  }

  export type nonBooking_parkingScalarWhereWithAggregatesInput = {
    AND?: nonBooking_parkingScalarWhereWithAggregatesInput | nonBooking_parkingScalarWhereWithAggregatesInput[]
    OR?: nonBooking_parkingScalarWhereWithAggregatesInput[]
    NOT?: nonBooking_parkingScalarWhereWithAggregatesInput | nonBooking_parkingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"nonBooking_parking"> | number
    startime?: DateTimeWithAggregatesFilter<"nonBooking_parking"> | Date | string
    endtime?: DateTimeWithAggregatesFilter<"nonBooking_parking"> | Date | string
    totaltime?: StringWithAggregatesFilter<"nonBooking_parking"> | string
    parkinglslotid?: IntWithAggregatesFilter<"nonBooking_parking"> | number
    carnumber?: StringWithAggregatesFilter<"nonBooking_parking"> | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    timestamp?: DateTimeFilter<"notifications"> | Date | string
    title?: StringFilter<"notifications"> | string
    From?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    userid?: IntFilter<"notifications"> | number
    readen?: BoolFilter<"notifications"> | boolean
    Notfifcationtype?: EnumNotificationTypeFilter<"notifications"> | $Enums.NotificationType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
    From?: SortOrder
    message?: SortOrder
    userid?: SortOrder
    readen?: SortOrder
    Notfifcationtype?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    timestamp?: DateTimeFilter<"notifications"> | Date | string
    title?: StringFilter<"notifications"> | string
    From?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    userid?: IntFilter<"notifications"> | number
    readen?: BoolFilter<"notifications"> | boolean
    Notfifcationtype?: EnumNotificationTypeFilter<"notifications"> | $Enums.NotificationType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
    From?: SortOrder
    message?: SortOrder
    userid?: SortOrder
    readen?: SortOrder
    Notfifcationtype?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    timestamp?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
    title?: StringWithAggregatesFilter<"notifications"> | string
    From?: StringWithAggregatesFilter<"notifications"> | string
    message?: StringWithAggregatesFilter<"notifications"> | string
    userid?: IntWithAggregatesFilter<"notifications"> | number
    readen?: BoolWithAggregatesFilter<"notifications"> | boolean
    Notfifcationtype?: EnumNotificationTypeWithAggregatesFilter<"notifications"> | $Enums.NotificationType
  }

  export type parkinglotWhereInput = {
    AND?: parkinglotWhereInput | parkinglotWhereInput[]
    OR?: parkinglotWhereInput[]
    NOT?: parkinglotWhereInput | parkinglotWhereInput[]
    id?: IntFilter<"parkinglot"> | number
    Name?: StringFilter<"parkinglot"> | string
    price?: StringFilter<"parkinglot"> | string
    Adress?: StringFilter<"parkinglot"> | string
    longitude?: FloatFilter<"parkinglot"> | number
    latitude?: FloatFilter<"parkinglot"> | number
    merchantid?: IntFilter<"parkinglot"> | number
    totalslots?: IntFilter<"parkinglot"> | number
    occupiedslots?: IntFilter<"parkinglot"> | number
    vacantslots?: IntFilter<"parkinglot"> | number
    isempty?: BoolFilter<"parkinglot"> | boolean
    merchant?: XOR<MerchantScalarRelationFilter, merchantWhereInput>
    parkings?: ParkingsListRelationFilter
    nonBooking_parking?: NonBooking_parkingListRelationFilter
  }

  export type parkinglotOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    price?: SortOrder
    Adress?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    merchantid?: SortOrder
    totalslots?: SortOrder
    occupiedslots?: SortOrder
    vacantslots?: SortOrder
    isempty?: SortOrder
    merchant?: merchantOrderByWithRelationInput
    parkings?: parkingsOrderByRelationAggregateInput
    nonBooking_parking?: nonBooking_parkingOrderByRelationAggregateInput
  }

  export type parkinglotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Name?: string
    AND?: parkinglotWhereInput | parkinglotWhereInput[]
    OR?: parkinglotWhereInput[]
    NOT?: parkinglotWhereInput | parkinglotWhereInput[]
    price?: StringFilter<"parkinglot"> | string
    Adress?: StringFilter<"parkinglot"> | string
    longitude?: FloatFilter<"parkinglot"> | number
    latitude?: FloatFilter<"parkinglot"> | number
    merchantid?: IntFilter<"parkinglot"> | number
    totalslots?: IntFilter<"parkinglot"> | number
    occupiedslots?: IntFilter<"parkinglot"> | number
    vacantslots?: IntFilter<"parkinglot"> | number
    isempty?: BoolFilter<"parkinglot"> | boolean
    merchant?: XOR<MerchantScalarRelationFilter, merchantWhereInput>
    parkings?: ParkingsListRelationFilter
    nonBooking_parking?: NonBooking_parkingListRelationFilter
  }, "id" | "Name">

  export type parkinglotOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    price?: SortOrder
    Adress?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    merchantid?: SortOrder
    totalslots?: SortOrder
    occupiedslots?: SortOrder
    vacantslots?: SortOrder
    isempty?: SortOrder
    _count?: parkinglotCountOrderByAggregateInput
    _avg?: parkinglotAvgOrderByAggregateInput
    _max?: parkinglotMaxOrderByAggregateInput
    _min?: parkinglotMinOrderByAggregateInput
    _sum?: parkinglotSumOrderByAggregateInput
  }

  export type parkinglotScalarWhereWithAggregatesInput = {
    AND?: parkinglotScalarWhereWithAggregatesInput | parkinglotScalarWhereWithAggregatesInput[]
    OR?: parkinglotScalarWhereWithAggregatesInput[]
    NOT?: parkinglotScalarWhereWithAggregatesInput | parkinglotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"parkinglot"> | number
    Name?: StringWithAggregatesFilter<"parkinglot"> | string
    price?: StringWithAggregatesFilter<"parkinglot"> | string
    Adress?: StringWithAggregatesFilter<"parkinglot"> | string
    longitude?: FloatWithAggregatesFilter<"parkinglot"> | number
    latitude?: FloatWithAggregatesFilter<"parkinglot"> | number
    merchantid?: IntWithAggregatesFilter<"parkinglot"> | number
    totalslots?: IntWithAggregatesFilter<"parkinglot"> | number
    occupiedslots?: IntWithAggregatesFilter<"parkinglot"> | number
    vacantslots?: IntWithAggregatesFilter<"parkinglot"> | number
    isempty?: BoolWithAggregatesFilter<"parkinglot"> | boolean
  }

  export type UserCreateInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    cardetails?: cardetailsCreateNestedManyWithoutUserInput
    parking?: parkingsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    cardetails?: cardetailsUncheckedCreateNestedManyWithoutUserInput
    parking?: parkingsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardetails?: cardetailsUpdateManyWithoutUserNestedInput
    parking?: parkingsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardetails?: cardetailsUncheckedUpdateManyWithoutUserNestedInput
    parking?: parkingsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type merchantCreateInput = {
    name: string
    number: string
    password: string
    parkinglot?: parkinglotCreateNestedManyWithoutMerchantInput
  }

  export type merchantUncheckedCreateInput = {
    id?: number
    name: string
    number: string
    password: string
    parkinglot?: parkinglotUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type merchantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    parkinglot?: parkinglotUpdateManyWithoutMerchantNestedInput
  }

  export type merchantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    parkinglot?: parkinglotUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type merchantCreateManyInput = {
    id?: number
    name: string
    number: string
    password: string
  }

  export type merchantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type merchantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type cardetailsCreateInput = {
    Carnumber: string
    iselectric: boolean
    isparked?: boolean
    user: UserCreateNestedOneWithoutCardetailsInput
  }

  export type cardetailsUncheckedCreateInput = {
    id?: number
    Carnumber: string
    ownerid: number
    iselectric: boolean
    isparked?: boolean
  }

  export type cardetailsUpdateInput = {
    Carnumber?: StringFieldUpdateOperationsInput | string
    iselectric?: BoolFieldUpdateOperationsInput | boolean
    isparked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCardetailsNestedInput
  }

  export type cardetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Carnumber?: StringFieldUpdateOperationsInput | string
    ownerid?: IntFieldUpdateOperationsInput | number
    iselectric?: BoolFieldUpdateOperationsInput | boolean
    isparked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cardetailsCreateManyInput = {
    id?: number
    Carnumber: string
    ownerid: number
    iselectric: boolean
    isparked?: boolean
  }

  export type cardetailsUpdateManyMutationInput = {
    Carnumber?: StringFieldUpdateOperationsInput | string
    iselectric?: BoolFieldUpdateOperationsInput | boolean
    isparked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cardetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Carnumber?: StringFieldUpdateOperationsInput | string
    ownerid?: IntFieldUpdateOperationsInput | number
    iselectric?: BoolFieldUpdateOperationsInput | boolean
    isparked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type parkingsCreateInput = {
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
    status: $Enums.Status
    user: UserCreateNestedOneWithoutParkingInput
    parkingslot: parkinglotCreateNestedOneWithoutParkingsInput
  }

  export type parkingsUncheckedCreateInput = {
    id?: number
    userid: number
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    parkingslotid: number
    carnumber: string
    status: $Enums.Status
  }

  export type parkingsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutParkingNestedInput
    parkingslot?: parkinglotUpdateOneRequiredWithoutParkingsNestedInput
  }

  export type parkingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    parkingslotid?: IntFieldUpdateOperationsInput | number
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type parkingsCreateManyInput = {
    id?: number
    userid: number
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    parkingslotid: number
    carnumber: string
    status: $Enums.Status
  }

  export type parkingsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type parkingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    parkingslotid?: IntFieldUpdateOperationsInput | number
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type nonBooking_parkingCreateInput = {
    startime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
    parkinglot: parkinglotCreateNestedOneWithoutNonBooking_parkingInput
  }

  export type nonBooking_parkingUncheckedCreateInput = {
    id?: number
    startime?: Date | string
    endtime?: Date | string
    totaltime?: string
    parkinglslotid: number
    carnumber: string
  }

  export type nonBooking_parkingUpdateInput = {
    startime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
    parkinglot?: parkinglotUpdateOneRequiredWithoutNonBooking_parkingNestedInput
  }

  export type nonBooking_parkingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    parkinglslotid?: IntFieldUpdateOperationsInput | number
    carnumber?: StringFieldUpdateOperationsInput | string
  }

  export type nonBooking_parkingCreateManyInput = {
    id?: number
    startime?: Date | string
    endtime?: Date | string
    totaltime?: string
    parkinglslotid: number
    carnumber: string
  }

  export type nonBooking_parkingUpdateManyMutationInput = {
    startime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
  }

  export type nonBooking_parkingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    parkinglslotid?: IntFieldUpdateOperationsInput | number
    carnumber?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsCreateInput = {
    timestamp?: Date | string
    title: string
    From: string
    message: string
    readen?: boolean
    Notfifcationtype?: $Enums.NotificationType
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string
    title: string
    From: string
    message: string
    userid: number
    readen?: boolean
    Notfifcationtype?: $Enums.NotificationType
  }

  export type notificationsUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    readen?: BoolFieldUpdateOperationsInput | boolean
    Notfifcationtype?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
    readen?: BoolFieldUpdateOperationsInput | boolean
    Notfifcationtype?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type notificationsCreateManyInput = {
    id?: number
    timestamp?: Date | string
    title: string
    From: string
    message: string
    userid: number
    readen?: boolean
    Notfifcationtype?: $Enums.NotificationType
  }

  export type notificationsUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    readen?: BoolFieldUpdateOperationsInput | boolean
    Notfifcationtype?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
    readen?: BoolFieldUpdateOperationsInput | boolean
    Notfifcationtype?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type parkinglotCreateInput = {
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    merchant: merchantCreateNestedOneWithoutParkinglotInput
    parkings?: parkingsCreateNestedManyWithoutParkingslotInput
    nonBooking_parking?: nonBooking_parkingCreateNestedManyWithoutParkinglotInput
  }

  export type parkinglotUncheckedCreateInput = {
    id?: number
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    merchantid: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    parkings?: parkingsUncheckedCreateNestedManyWithoutParkingslotInput
    nonBooking_parking?: nonBooking_parkingUncheckedCreateNestedManyWithoutParkinglotInput
  }

  export type parkinglotUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    merchant?: merchantUpdateOneRequiredWithoutParkinglotNestedInput
    parkings?: parkingsUpdateManyWithoutParkingslotNestedInput
    nonBooking_parking?: nonBooking_parkingUpdateManyWithoutParkinglotNestedInput
  }

  export type parkinglotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    merchantid?: IntFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    parkings?: parkingsUncheckedUpdateManyWithoutParkingslotNestedInput
    nonBooking_parking?: nonBooking_parkingUncheckedUpdateManyWithoutParkinglotNestedInput
  }

  export type parkinglotCreateManyInput = {
    id?: number
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    merchantid: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
  }

  export type parkinglotUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type parkinglotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    merchantid?: IntFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CardetailsListRelationFilter = {
    every?: cardetailsWhereInput
    some?: cardetailsWhereInput
    none?: cardetailsWhereInput
  }

  export type ParkingsListRelationFilter = {
    every?: parkingsWhereInput
    some?: parkingsWhereInput
    none?: parkingsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cardetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type parkingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ParkinglotListRelationFilter = {
    every?: parkinglotWhereInput
    some?: parkinglotWhereInput
    none?: parkinglotWhereInput
  }

  export type parkinglotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type merchantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type merchantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type merchantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type merchantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type merchantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type cardetailsCountOrderByAggregateInput = {
    id?: SortOrder
    Carnumber?: SortOrder
    ownerid?: SortOrder
    iselectric?: SortOrder
    isparked?: SortOrder
  }

  export type cardetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerid?: SortOrder
  }

  export type cardetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    Carnumber?: SortOrder
    ownerid?: SortOrder
    iselectric?: SortOrder
    isparked?: SortOrder
  }

  export type cardetailsMinOrderByAggregateInput = {
    id?: SortOrder
    Carnumber?: SortOrder
    ownerid?: SortOrder
    iselectric?: SortOrder
    isparked?: SortOrder
  }

  export type cardetailsSumOrderByAggregateInput = {
    id?: SortOrder
    ownerid?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ParkinglotScalarRelationFilter = {
    is?: parkinglotWhereInput
    isNot?: parkinglotWhereInput
  }

  export type parkingsCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    date?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkingslotid?: SortOrder
    carnumber?: SortOrder
    status?: SortOrder
  }

  export type parkingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    parkingslotid?: SortOrder
  }

  export type parkingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    date?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkingslotid?: SortOrder
    carnumber?: SortOrder
    status?: SortOrder
  }

  export type parkingsMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    date?: SortOrder
    starttime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkingslotid?: SortOrder
    carnumber?: SortOrder
    status?: SortOrder
  }

  export type parkingsSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    parkingslotid?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type nonBooking_parkingCountOrderByAggregateInput = {
    id?: SortOrder
    startime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkinglslotid?: SortOrder
    carnumber?: SortOrder
  }

  export type nonBooking_parkingAvgOrderByAggregateInput = {
    id?: SortOrder
    parkinglslotid?: SortOrder
  }

  export type nonBooking_parkingMaxOrderByAggregateInput = {
    id?: SortOrder
    startime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkinglslotid?: SortOrder
    carnumber?: SortOrder
  }

  export type nonBooking_parkingMinOrderByAggregateInput = {
    id?: SortOrder
    startime?: SortOrder
    endtime?: SortOrder
    totaltime?: SortOrder
    parkinglslotid?: SortOrder
    carnumber?: SortOrder
  }

  export type nonBooking_parkingSumOrderByAggregateInput = {
    id?: SortOrder
    parkinglslotid?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
    From?: SortOrder
    message?: SortOrder
    userid?: SortOrder
    readen?: SortOrder
    Notfifcationtype?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
    From?: SortOrder
    message?: SortOrder
    userid?: SortOrder
    readen?: SortOrder
    Notfifcationtype?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
    From?: SortOrder
    message?: SortOrder
    userid?: SortOrder
    readen?: SortOrder
    Notfifcationtype?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MerchantScalarRelationFilter = {
    is?: merchantWhereInput
    isNot?: merchantWhereInput
  }

  export type NonBooking_parkingListRelationFilter = {
    every?: nonBooking_parkingWhereInput
    some?: nonBooking_parkingWhereInput
    none?: nonBooking_parkingWhereInput
  }

  export type nonBooking_parkingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type parkinglotCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    price?: SortOrder
    Adress?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    merchantid?: SortOrder
    totalslots?: SortOrder
    occupiedslots?: SortOrder
    vacantslots?: SortOrder
    isempty?: SortOrder
  }

  export type parkinglotAvgOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    merchantid?: SortOrder
    totalslots?: SortOrder
    occupiedslots?: SortOrder
    vacantslots?: SortOrder
  }

  export type parkinglotMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    price?: SortOrder
    Adress?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    merchantid?: SortOrder
    totalslots?: SortOrder
    occupiedslots?: SortOrder
    vacantslots?: SortOrder
    isempty?: SortOrder
  }

  export type parkinglotMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    price?: SortOrder
    Adress?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    merchantid?: SortOrder
    totalslots?: SortOrder
    occupiedslots?: SortOrder
    vacantslots?: SortOrder
    isempty?: SortOrder
  }

  export type parkinglotSumOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    merchantid?: SortOrder
    totalslots?: SortOrder
    occupiedslots?: SortOrder
    vacantslots?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type cardetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<cardetailsCreateWithoutUserInput, cardetailsUncheckedCreateWithoutUserInput> | cardetailsCreateWithoutUserInput[] | cardetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cardetailsCreateOrConnectWithoutUserInput | cardetailsCreateOrConnectWithoutUserInput[]
    createMany?: cardetailsCreateManyUserInputEnvelope
    connect?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
  }

  export type parkingsCreateNestedManyWithoutUserInput = {
    create?: XOR<parkingsCreateWithoutUserInput, parkingsUncheckedCreateWithoutUserInput> | parkingsCreateWithoutUserInput[] | parkingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutUserInput | parkingsCreateOrConnectWithoutUserInput[]
    createMany?: parkingsCreateManyUserInputEnvelope
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type cardetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cardetailsCreateWithoutUserInput, cardetailsUncheckedCreateWithoutUserInput> | cardetailsCreateWithoutUserInput[] | cardetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cardetailsCreateOrConnectWithoutUserInput | cardetailsCreateOrConnectWithoutUserInput[]
    createMany?: cardetailsCreateManyUserInputEnvelope
    connect?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
  }

  export type parkingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<parkingsCreateWithoutUserInput, parkingsUncheckedCreateWithoutUserInput> | parkingsCreateWithoutUserInput[] | parkingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutUserInput | parkingsCreateOrConnectWithoutUserInput[]
    createMany?: parkingsCreateManyUserInputEnvelope
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type cardetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<cardetailsCreateWithoutUserInput, cardetailsUncheckedCreateWithoutUserInput> | cardetailsCreateWithoutUserInput[] | cardetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cardetailsCreateOrConnectWithoutUserInput | cardetailsCreateOrConnectWithoutUserInput[]
    upsert?: cardetailsUpsertWithWhereUniqueWithoutUserInput | cardetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cardetailsCreateManyUserInputEnvelope
    set?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    disconnect?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    delete?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    connect?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    update?: cardetailsUpdateWithWhereUniqueWithoutUserInput | cardetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cardetailsUpdateManyWithWhereWithoutUserInput | cardetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cardetailsScalarWhereInput | cardetailsScalarWhereInput[]
  }

  export type parkingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<parkingsCreateWithoutUserInput, parkingsUncheckedCreateWithoutUserInput> | parkingsCreateWithoutUserInput[] | parkingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutUserInput | parkingsCreateOrConnectWithoutUserInput[]
    upsert?: parkingsUpsertWithWhereUniqueWithoutUserInput | parkingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: parkingsCreateManyUserInputEnvelope
    set?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    disconnect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    delete?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    update?: parkingsUpdateWithWhereUniqueWithoutUserInput | parkingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: parkingsUpdateManyWithWhereWithoutUserInput | parkingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: parkingsScalarWhereInput | parkingsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUserInput | notificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUserInput | notificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUserInput | notificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cardetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cardetailsCreateWithoutUserInput, cardetailsUncheckedCreateWithoutUserInput> | cardetailsCreateWithoutUserInput[] | cardetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cardetailsCreateOrConnectWithoutUserInput | cardetailsCreateOrConnectWithoutUserInput[]
    upsert?: cardetailsUpsertWithWhereUniqueWithoutUserInput | cardetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cardetailsCreateManyUserInputEnvelope
    set?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    disconnect?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    delete?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    connect?: cardetailsWhereUniqueInput | cardetailsWhereUniqueInput[]
    update?: cardetailsUpdateWithWhereUniqueWithoutUserInput | cardetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cardetailsUpdateManyWithWhereWithoutUserInput | cardetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cardetailsScalarWhereInput | cardetailsScalarWhereInput[]
  }

  export type parkingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<parkingsCreateWithoutUserInput, parkingsUncheckedCreateWithoutUserInput> | parkingsCreateWithoutUserInput[] | parkingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutUserInput | parkingsCreateOrConnectWithoutUserInput[]
    upsert?: parkingsUpsertWithWhereUniqueWithoutUserInput | parkingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: parkingsCreateManyUserInputEnvelope
    set?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    disconnect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    delete?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    update?: parkingsUpdateWithWhereUniqueWithoutUserInput | parkingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: parkingsUpdateManyWithWhereWithoutUserInput | parkingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: parkingsScalarWhereInput | parkingsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUserInput | notificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUserInput | notificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUserInput | notificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type parkinglotCreateNestedManyWithoutMerchantInput = {
    create?: XOR<parkinglotCreateWithoutMerchantInput, parkinglotUncheckedCreateWithoutMerchantInput> | parkinglotCreateWithoutMerchantInput[] | parkinglotUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: parkinglotCreateOrConnectWithoutMerchantInput | parkinglotCreateOrConnectWithoutMerchantInput[]
    createMany?: parkinglotCreateManyMerchantInputEnvelope
    connect?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
  }

  export type parkinglotUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<parkinglotCreateWithoutMerchantInput, parkinglotUncheckedCreateWithoutMerchantInput> | parkinglotCreateWithoutMerchantInput[] | parkinglotUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: parkinglotCreateOrConnectWithoutMerchantInput | parkinglotCreateOrConnectWithoutMerchantInput[]
    createMany?: parkinglotCreateManyMerchantInputEnvelope
    connect?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
  }

  export type parkinglotUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<parkinglotCreateWithoutMerchantInput, parkinglotUncheckedCreateWithoutMerchantInput> | parkinglotCreateWithoutMerchantInput[] | parkinglotUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: parkinglotCreateOrConnectWithoutMerchantInput | parkinglotCreateOrConnectWithoutMerchantInput[]
    upsert?: parkinglotUpsertWithWhereUniqueWithoutMerchantInput | parkinglotUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: parkinglotCreateManyMerchantInputEnvelope
    set?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    disconnect?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    delete?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    connect?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    update?: parkinglotUpdateWithWhereUniqueWithoutMerchantInput | parkinglotUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: parkinglotUpdateManyWithWhereWithoutMerchantInput | parkinglotUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: parkinglotScalarWhereInput | parkinglotScalarWhereInput[]
  }

  export type parkinglotUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<parkinglotCreateWithoutMerchantInput, parkinglotUncheckedCreateWithoutMerchantInput> | parkinglotCreateWithoutMerchantInput[] | parkinglotUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: parkinglotCreateOrConnectWithoutMerchantInput | parkinglotCreateOrConnectWithoutMerchantInput[]
    upsert?: parkinglotUpsertWithWhereUniqueWithoutMerchantInput | parkinglotUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: parkinglotCreateManyMerchantInputEnvelope
    set?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    disconnect?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    delete?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    connect?: parkinglotWhereUniqueInput | parkinglotWhereUniqueInput[]
    update?: parkinglotUpdateWithWhereUniqueWithoutMerchantInput | parkinglotUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: parkinglotUpdateManyWithWhereWithoutMerchantInput | parkinglotUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: parkinglotScalarWhereInput | parkinglotScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCardetailsInput = {
    create?: XOR<UserCreateWithoutCardetailsInput, UserUncheckedCreateWithoutCardetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardetailsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCardetailsNestedInput = {
    create?: XOR<UserCreateWithoutCardetailsInput, UserUncheckedCreateWithoutCardetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardetailsInput
    upsert?: UserUpsertWithoutCardetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardetailsInput, UserUpdateWithoutCardetailsInput>, UserUncheckedUpdateWithoutCardetailsInput>
  }

  export type UserCreateNestedOneWithoutParkingInput = {
    create?: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingInput
    connect?: UserWhereUniqueInput
  }

  export type parkinglotCreateNestedOneWithoutParkingsInput = {
    create?: XOR<parkinglotCreateWithoutParkingsInput, parkinglotUncheckedCreateWithoutParkingsInput>
    connectOrCreate?: parkinglotCreateOrConnectWithoutParkingsInput
    connect?: parkinglotWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutParkingNestedInput = {
    create?: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingInput
    upsert?: UserUpsertWithoutParkingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingInput, UserUpdateWithoutParkingInput>, UserUncheckedUpdateWithoutParkingInput>
  }

  export type parkinglotUpdateOneRequiredWithoutParkingsNestedInput = {
    create?: XOR<parkinglotCreateWithoutParkingsInput, parkinglotUncheckedCreateWithoutParkingsInput>
    connectOrCreate?: parkinglotCreateOrConnectWithoutParkingsInput
    upsert?: parkinglotUpsertWithoutParkingsInput
    connect?: parkinglotWhereUniqueInput
    update?: XOR<XOR<parkinglotUpdateToOneWithWhereWithoutParkingsInput, parkinglotUpdateWithoutParkingsInput>, parkinglotUncheckedUpdateWithoutParkingsInput>
  }

  export type parkinglotCreateNestedOneWithoutNonBooking_parkingInput = {
    create?: XOR<parkinglotCreateWithoutNonBooking_parkingInput, parkinglotUncheckedCreateWithoutNonBooking_parkingInput>
    connectOrCreate?: parkinglotCreateOrConnectWithoutNonBooking_parkingInput
    connect?: parkinglotWhereUniqueInput
  }

  export type parkinglotUpdateOneRequiredWithoutNonBooking_parkingNestedInput = {
    create?: XOR<parkinglotCreateWithoutNonBooking_parkingInput, parkinglotUncheckedCreateWithoutNonBooking_parkingInput>
    connectOrCreate?: parkinglotCreateOrConnectWithoutNonBooking_parkingInput
    upsert?: parkinglotUpsertWithoutNonBooking_parkingInput
    connect?: parkinglotWhereUniqueInput
    update?: XOR<XOR<parkinglotUpdateToOneWithWhereWithoutNonBooking_parkingInput, parkinglotUpdateWithoutNonBooking_parkingInput>, parkinglotUncheckedUpdateWithoutNonBooking_parkingInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type merchantCreateNestedOneWithoutParkinglotInput = {
    create?: XOR<merchantCreateWithoutParkinglotInput, merchantUncheckedCreateWithoutParkinglotInput>
    connectOrCreate?: merchantCreateOrConnectWithoutParkinglotInput
    connect?: merchantWhereUniqueInput
  }

  export type parkingsCreateNestedManyWithoutParkingslotInput = {
    create?: XOR<parkingsCreateWithoutParkingslotInput, parkingsUncheckedCreateWithoutParkingslotInput> | parkingsCreateWithoutParkingslotInput[] | parkingsUncheckedCreateWithoutParkingslotInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutParkingslotInput | parkingsCreateOrConnectWithoutParkingslotInput[]
    createMany?: parkingsCreateManyParkingslotInputEnvelope
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
  }

  export type nonBooking_parkingCreateNestedManyWithoutParkinglotInput = {
    create?: XOR<nonBooking_parkingCreateWithoutParkinglotInput, nonBooking_parkingUncheckedCreateWithoutParkinglotInput> | nonBooking_parkingCreateWithoutParkinglotInput[] | nonBooking_parkingUncheckedCreateWithoutParkinglotInput[]
    connectOrCreate?: nonBooking_parkingCreateOrConnectWithoutParkinglotInput | nonBooking_parkingCreateOrConnectWithoutParkinglotInput[]
    createMany?: nonBooking_parkingCreateManyParkinglotInputEnvelope
    connect?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
  }

  export type parkingsUncheckedCreateNestedManyWithoutParkingslotInput = {
    create?: XOR<parkingsCreateWithoutParkingslotInput, parkingsUncheckedCreateWithoutParkingslotInput> | parkingsCreateWithoutParkingslotInput[] | parkingsUncheckedCreateWithoutParkingslotInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutParkingslotInput | parkingsCreateOrConnectWithoutParkingslotInput[]
    createMany?: parkingsCreateManyParkingslotInputEnvelope
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
  }

  export type nonBooking_parkingUncheckedCreateNestedManyWithoutParkinglotInput = {
    create?: XOR<nonBooking_parkingCreateWithoutParkinglotInput, nonBooking_parkingUncheckedCreateWithoutParkinglotInput> | nonBooking_parkingCreateWithoutParkinglotInput[] | nonBooking_parkingUncheckedCreateWithoutParkinglotInput[]
    connectOrCreate?: nonBooking_parkingCreateOrConnectWithoutParkinglotInput | nonBooking_parkingCreateOrConnectWithoutParkinglotInput[]
    createMany?: nonBooking_parkingCreateManyParkinglotInputEnvelope
    connect?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type merchantUpdateOneRequiredWithoutParkinglotNestedInput = {
    create?: XOR<merchantCreateWithoutParkinglotInput, merchantUncheckedCreateWithoutParkinglotInput>
    connectOrCreate?: merchantCreateOrConnectWithoutParkinglotInput
    upsert?: merchantUpsertWithoutParkinglotInput
    connect?: merchantWhereUniqueInput
    update?: XOR<XOR<merchantUpdateToOneWithWhereWithoutParkinglotInput, merchantUpdateWithoutParkinglotInput>, merchantUncheckedUpdateWithoutParkinglotInput>
  }

  export type parkingsUpdateManyWithoutParkingslotNestedInput = {
    create?: XOR<parkingsCreateWithoutParkingslotInput, parkingsUncheckedCreateWithoutParkingslotInput> | parkingsCreateWithoutParkingslotInput[] | parkingsUncheckedCreateWithoutParkingslotInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutParkingslotInput | parkingsCreateOrConnectWithoutParkingslotInput[]
    upsert?: parkingsUpsertWithWhereUniqueWithoutParkingslotInput | parkingsUpsertWithWhereUniqueWithoutParkingslotInput[]
    createMany?: parkingsCreateManyParkingslotInputEnvelope
    set?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    disconnect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    delete?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    update?: parkingsUpdateWithWhereUniqueWithoutParkingslotInput | parkingsUpdateWithWhereUniqueWithoutParkingslotInput[]
    updateMany?: parkingsUpdateManyWithWhereWithoutParkingslotInput | parkingsUpdateManyWithWhereWithoutParkingslotInput[]
    deleteMany?: parkingsScalarWhereInput | parkingsScalarWhereInput[]
  }

  export type nonBooking_parkingUpdateManyWithoutParkinglotNestedInput = {
    create?: XOR<nonBooking_parkingCreateWithoutParkinglotInput, nonBooking_parkingUncheckedCreateWithoutParkinglotInput> | nonBooking_parkingCreateWithoutParkinglotInput[] | nonBooking_parkingUncheckedCreateWithoutParkinglotInput[]
    connectOrCreate?: nonBooking_parkingCreateOrConnectWithoutParkinglotInput | nonBooking_parkingCreateOrConnectWithoutParkinglotInput[]
    upsert?: nonBooking_parkingUpsertWithWhereUniqueWithoutParkinglotInput | nonBooking_parkingUpsertWithWhereUniqueWithoutParkinglotInput[]
    createMany?: nonBooking_parkingCreateManyParkinglotInputEnvelope
    set?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    disconnect?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    delete?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    connect?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    update?: nonBooking_parkingUpdateWithWhereUniqueWithoutParkinglotInput | nonBooking_parkingUpdateWithWhereUniqueWithoutParkinglotInput[]
    updateMany?: nonBooking_parkingUpdateManyWithWhereWithoutParkinglotInput | nonBooking_parkingUpdateManyWithWhereWithoutParkinglotInput[]
    deleteMany?: nonBooking_parkingScalarWhereInput | nonBooking_parkingScalarWhereInput[]
  }

  export type parkingsUncheckedUpdateManyWithoutParkingslotNestedInput = {
    create?: XOR<parkingsCreateWithoutParkingslotInput, parkingsUncheckedCreateWithoutParkingslotInput> | parkingsCreateWithoutParkingslotInput[] | parkingsUncheckedCreateWithoutParkingslotInput[]
    connectOrCreate?: parkingsCreateOrConnectWithoutParkingslotInput | parkingsCreateOrConnectWithoutParkingslotInput[]
    upsert?: parkingsUpsertWithWhereUniqueWithoutParkingslotInput | parkingsUpsertWithWhereUniqueWithoutParkingslotInput[]
    createMany?: parkingsCreateManyParkingslotInputEnvelope
    set?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    disconnect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    delete?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    connect?: parkingsWhereUniqueInput | parkingsWhereUniqueInput[]
    update?: parkingsUpdateWithWhereUniqueWithoutParkingslotInput | parkingsUpdateWithWhereUniqueWithoutParkingslotInput[]
    updateMany?: parkingsUpdateManyWithWhereWithoutParkingslotInput | parkingsUpdateManyWithWhereWithoutParkingslotInput[]
    deleteMany?: parkingsScalarWhereInput | parkingsScalarWhereInput[]
  }

  export type nonBooking_parkingUncheckedUpdateManyWithoutParkinglotNestedInput = {
    create?: XOR<nonBooking_parkingCreateWithoutParkinglotInput, nonBooking_parkingUncheckedCreateWithoutParkinglotInput> | nonBooking_parkingCreateWithoutParkinglotInput[] | nonBooking_parkingUncheckedCreateWithoutParkinglotInput[]
    connectOrCreate?: nonBooking_parkingCreateOrConnectWithoutParkinglotInput | nonBooking_parkingCreateOrConnectWithoutParkinglotInput[]
    upsert?: nonBooking_parkingUpsertWithWhereUniqueWithoutParkinglotInput | nonBooking_parkingUpsertWithWhereUniqueWithoutParkinglotInput[]
    createMany?: nonBooking_parkingCreateManyParkinglotInputEnvelope
    set?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    disconnect?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    delete?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    connect?: nonBooking_parkingWhereUniqueInput | nonBooking_parkingWhereUniqueInput[]
    update?: nonBooking_parkingUpdateWithWhereUniqueWithoutParkinglotInput | nonBooking_parkingUpdateWithWhereUniqueWithoutParkinglotInput[]
    updateMany?: nonBooking_parkingUpdateManyWithWhereWithoutParkinglotInput | nonBooking_parkingUpdateManyWithWhereWithoutParkinglotInput[]
    deleteMany?: nonBooking_parkingScalarWhereInput | nonBooking_parkingScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type cardetailsCreateWithoutUserInput = {
    Carnumber: string
    iselectric: boolean
    isparked?: boolean
  }

  export type cardetailsUncheckedCreateWithoutUserInput = {
    id?: number
    Carnumber: string
    iselectric: boolean
    isparked?: boolean
  }

  export type cardetailsCreateOrConnectWithoutUserInput = {
    where: cardetailsWhereUniqueInput
    create: XOR<cardetailsCreateWithoutUserInput, cardetailsUncheckedCreateWithoutUserInput>
  }

  export type cardetailsCreateManyUserInputEnvelope = {
    data: cardetailsCreateManyUserInput | cardetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type parkingsCreateWithoutUserInput = {
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
    status: $Enums.Status
    parkingslot: parkinglotCreateNestedOneWithoutParkingsInput
  }

  export type parkingsUncheckedCreateWithoutUserInput = {
    id?: number
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    parkingslotid: number
    carnumber: string
    status: $Enums.Status
  }

  export type parkingsCreateOrConnectWithoutUserInput = {
    where: parkingsWhereUniqueInput
    create: XOR<parkingsCreateWithoutUserInput, parkingsUncheckedCreateWithoutUserInput>
  }

  export type parkingsCreateManyUserInputEnvelope = {
    data: parkingsCreateManyUserInput | parkingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUserInput = {
    timestamp?: Date | string
    title: string
    From: string
    message: string
    readen?: boolean
    Notfifcationtype?: $Enums.NotificationType
  }

  export type notificationsUncheckedCreateWithoutUserInput = {
    id?: number
    timestamp?: Date | string
    title: string
    From: string
    message: string
    readen?: boolean
    Notfifcationtype?: $Enums.NotificationType
  }

  export type notificationsCreateOrConnectWithoutUserInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput>
  }

  export type notificationsCreateManyUserInputEnvelope = {
    data: notificationsCreateManyUserInput | notificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cardetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: cardetailsWhereUniqueInput
    update: XOR<cardetailsUpdateWithoutUserInput, cardetailsUncheckedUpdateWithoutUserInput>
    create: XOR<cardetailsCreateWithoutUserInput, cardetailsUncheckedCreateWithoutUserInput>
  }

  export type cardetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: cardetailsWhereUniqueInput
    data: XOR<cardetailsUpdateWithoutUserInput, cardetailsUncheckedUpdateWithoutUserInput>
  }

  export type cardetailsUpdateManyWithWhereWithoutUserInput = {
    where: cardetailsScalarWhereInput
    data: XOR<cardetailsUpdateManyMutationInput, cardetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type cardetailsScalarWhereInput = {
    AND?: cardetailsScalarWhereInput | cardetailsScalarWhereInput[]
    OR?: cardetailsScalarWhereInput[]
    NOT?: cardetailsScalarWhereInput | cardetailsScalarWhereInput[]
    id?: IntFilter<"cardetails"> | number
    Carnumber?: StringFilter<"cardetails"> | string
    ownerid?: IntFilter<"cardetails"> | number
    iselectric?: BoolFilter<"cardetails"> | boolean
    isparked?: BoolFilter<"cardetails"> | boolean
  }

  export type parkingsUpsertWithWhereUniqueWithoutUserInput = {
    where: parkingsWhereUniqueInput
    update: XOR<parkingsUpdateWithoutUserInput, parkingsUncheckedUpdateWithoutUserInput>
    create: XOR<parkingsCreateWithoutUserInput, parkingsUncheckedCreateWithoutUserInput>
  }

  export type parkingsUpdateWithWhereUniqueWithoutUserInput = {
    where: parkingsWhereUniqueInput
    data: XOR<parkingsUpdateWithoutUserInput, parkingsUncheckedUpdateWithoutUserInput>
  }

  export type parkingsUpdateManyWithWhereWithoutUserInput = {
    where: parkingsScalarWhereInput
    data: XOR<parkingsUpdateManyMutationInput, parkingsUncheckedUpdateManyWithoutUserInput>
  }

  export type parkingsScalarWhereInput = {
    AND?: parkingsScalarWhereInput | parkingsScalarWhereInput[]
    OR?: parkingsScalarWhereInput[]
    NOT?: parkingsScalarWhereInput | parkingsScalarWhereInput[]
    id?: IntFilter<"parkings"> | number
    userid?: IntFilter<"parkings"> | number
    date?: DateTimeFilter<"parkings"> | Date | string
    starttime?: DateTimeFilter<"parkings"> | Date | string
    endtime?: DateTimeFilter<"parkings"> | Date | string
    totaltime?: StringFilter<"parkings"> | string
    parkingslotid?: IntFilter<"parkings"> | number
    carnumber?: StringFilter<"parkings"> | string
    status?: EnumStatusFilter<"parkings"> | $Enums.Status
  }

  export type notificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUserInput, notificationsUncheckedUpdateWithoutUserInput>
    create: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUserInput, notificationsUncheckedUpdateWithoutUserInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUserInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    timestamp?: DateTimeFilter<"notifications"> | Date | string
    title?: StringFilter<"notifications"> | string
    From?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    userid?: IntFilter<"notifications"> | number
    readen?: BoolFilter<"notifications"> | boolean
    Notfifcationtype?: EnumNotificationTypeFilter<"notifications"> | $Enums.NotificationType
  }

  export type parkinglotCreateWithoutMerchantInput = {
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    parkings?: parkingsCreateNestedManyWithoutParkingslotInput
    nonBooking_parking?: nonBooking_parkingCreateNestedManyWithoutParkinglotInput
  }

  export type parkinglotUncheckedCreateWithoutMerchantInput = {
    id?: number
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    parkings?: parkingsUncheckedCreateNestedManyWithoutParkingslotInput
    nonBooking_parking?: nonBooking_parkingUncheckedCreateNestedManyWithoutParkinglotInput
  }

  export type parkinglotCreateOrConnectWithoutMerchantInput = {
    where: parkinglotWhereUniqueInput
    create: XOR<parkinglotCreateWithoutMerchantInput, parkinglotUncheckedCreateWithoutMerchantInput>
  }

  export type parkinglotCreateManyMerchantInputEnvelope = {
    data: parkinglotCreateManyMerchantInput | parkinglotCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type parkinglotUpsertWithWhereUniqueWithoutMerchantInput = {
    where: parkinglotWhereUniqueInput
    update: XOR<parkinglotUpdateWithoutMerchantInput, parkinglotUncheckedUpdateWithoutMerchantInput>
    create: XOR<parkinglotCreateWithoutMerchantInput, parkinglotUncheckedCreateWithoutMerchantInput>
  }

  export type parkinglotUpdateWithWhereUniqueWithoutMerchantInput = {
    where: parkinglotWhereUniqueInput
    data: XOR<parkinglotUpdateWithoutMerchantInput, parkinglotUncheckedUpdateWithoutMerchantInput>
  }

  export type parkinglotUpdateManyWithWhereWithoutMerchantInput = {
    where: parkinglotScalarWhereInput
    data: XOR<parkinglotUpdateManyMutationInput, parkinglotUncheckedUpdateManyWithoutMerchantInput>
  }

  export type parkinglotScalarWhereInput = {
    AND?: parkinglotScalarWhereInput | parkinglotScalarWhereInput[]
    OR?: parkinglotScalarWhereInput[]
    NOT?: parkinglotScalarWhereInput | parkinglotScalarWhereInput[]
    id?: IntFilter<"parkinglot"> | number
    Name?: StringFilter<"parkinglot"> | string
    price?: StringFilter<"parkinglot"> | string
    Adress?: StringFilter<"parkinglot"> | string
    longitude?: FloatFilter<"parkinglot"> | number
    latitude?: FloatFilter<"parkinglot"> | number
    merchantid?: IntFilter<"parkinglot"> | number
    totalslots?: IntFilter<"parkinglot"> | number
    occupiedslots?: IntFilter<"parkinglot"> | number
    vacantslots?: IntFilter<"parkinglot"> | number
    isempty?: BoolFilter<"parkinglot"> | boolean
  }

  export type UserCreateWithoutCardetailsInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    parking?: parkingsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCardetailsInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    parking?: parkingsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCardetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardetailsInput, UserUncheckedCreateWithoutCardetailsInput>
  }

  export type UserUpsertWithoutCardetailsInput = {
    update: XOR<UserUpdateWithoutCardetailsInput, UserUncheckedUpdateWithoutCardetailsInput>
    create: XOR<UserCreateWithoutCardetailsInput, UserUncheckedCreateWithoutCardetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardetailsInput, UserUncheckedUpdateWithoutCardetailsInput>
  }

  export type UserUpdateWithoutCardetailsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    parking?: parkingsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCardetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    parking?: parkingsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutParkingInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    cardetails?: cardetailsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParkingInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    cardetails?: cardetailsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParkingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
  }

  export type parkinglotCreateWithoutParkingsInput = {
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    merchant: merchantCreateNestedOneWithoutParkinglotInput
    nonBooking_parking?: nonBooking_parkingCreateNestedManyWithoutParkinglotInput
  }

  export type parkinglotUncheckedCreateWithoutParkingsInput = {
    id?: number
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    merchantid: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    nonBooking_parking?: nonBooking_parkingUncheckedCreateNestedManyWithoutParkinglotInput
  }

  export type parkinglotCreateOrConnectWithoutParkingsInput = {
    where: parkinglotWhereUniqueInput
    create: XOR<parkinglotCreateWithoutParkingsInput, parkinglotUncheckedCreateWithoutParkingsInput>
  }

  export type UserUpsertWithoutParkingInput = {
    update: XOR<UserUpdateWithoutParkingInput, UserUncheckedUpdateWithoutParkingInput>
    create: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingInput, UserUncheckedUpdateWithoutParkingInput>
  }

  export type UserUpdateWithoutParkingInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardetails?: cardetailsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParkingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardetails?: cardetailsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type parkinglotUpsertWithoutParkingsInput = {
    update: XOR<parkinglotUpdateWithoutParkingsInput, parkinglotUncheckedUpdateWithoutParkingsInput>
    create: XOR<parkinglotCreateWithoutParkingsInput, parkinglotUncheckedCreateWithoutParkingsInput>
    where?: parkinglotWhereInput
  }

  export type parkinglotUpdateToOneWithWhereWithoutParkingsInput = {
    where?: parkinglotWhereInput
    data: XOR<parkinglotUpdateWithoutParkingsInput, parkinglotUncheckedUpdateWithoutParkingsInput>
  }

  export type parkinglotUpdateWithoutParkingsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    merchant?: merchantUpdateOneRequiredWithoutParkinglotNestedInput
    nonBooking_parking?: nonBooking_parkingUpdateManyWithoutParkinglotNestedInput
  }

  export type parkinglotUncheckedUpdateWithoutParkingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    merchantid?: IntFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    nonBooking_parking?: nonBooking_parkingUncheckedUpdateManyWithoutParkinglotNestedInput
  }

  export type parkinglotCreateWithoutNonBooking_parkingInput = {
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    merchant: merchantCreateNestedOneWithoutParkinglotInput
    parkings?: parkingsCreateNestedManyWithoutParkingslotInput
  }

  export type parkinglotUncheckedCreateWithoutNonBooking_parkingInput = {
    id?: number
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    merchantid: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
    parkings?: parkingsUncheckedCreateNestedManyWithoutParkingslotInput
  }

  export type parkinglotCreateOrConnectWithoutNonBooking_parkingInput = {
    where: parkinglotWhereUniqueInput
    create: XOR<parkinglotCreateWithoutNonBooking_parkingInput, parkinglotUncheckedCreateWithoutNonBooking_parkingInput>
  }

  export type parkinglotUpsertWithoutNonBooking_parkingInput = {
    update: XOR<parkinglotUpdateWithoutNonBooking_parkingInput, parkinglotUncheckedUpdateWithoutNonBooking_parkingInput>
    create: XOR<parkinglotCreateWithoutNonBooking_parkingInput, parkinglotUncheckedCreateWithoutNonBooking_parkingInput>
    where?: parkinglotWhereInput
  }

  export type parkinglotUpdateToOneWithWhereWithoutNonBooking_parkingInput = {
    where?: parkinglotWhereInput
    data: XOR<parkinglotUpdateWithoutNonBooking_parkingInput, parkinglotUncheckedUpdateWithoutNonBooking_parkingInput>
  }

  export type parkinglotUpdateWithoutNonBooking_parkingInput = {
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    merchant?: merchantUpdateOneRequiredWithoutParkinglotNestedInput
    parkings?: parkingsUpdateManyWithoutParkingslotNestedInput
  }

  export type parkinglotUncheckedUpdateWithoutNonBooking_parkingInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    merchantid?: IntFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    parkings?: parkingsUncheckedUpdateManyWithoutParkingslotNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    cardetails?: cardetailsCreateNestedManyWithoutUserInput
    parking?: parkingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    cardetails?: cardetailsUncheckedCreateNestedManyWithoutUserInput
    parking?: parkingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardetails?: cardetailsUpdateManyWithoutUserNestedInput
    parking?: parkingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardetails?: cardetailsUncheckedUpdateManyWithoutUserNestedInput
    parking?: parkingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type merchantCreateWithoutParkinglotInput = {
    name: string
    number: string
    password: string
  }

  export type merchantUncheckedCreateWithoutParkinglotInput = {
    id?: number
    name: string
    number: string
    password: string
  }

  export type merchantCreateOrConnectWithoutParkinglotInput = {
    where: merchantWhereUniqueInput
    create: XOR<merchantCreateWithoutParkinglotInput, merchantUncheckedCreateWithoutParkinglotInput>
  }

  export type parkingsCreateWithoutParkingslotInput = {
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
    status: $Enums.Status
    user: UserCreateNestedOneWithoutParkingInput
  }

  export type parkingsUncheckedCreateWithoutParkingslotInput = {
    id?: number
    userid: number
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
    status: $Enums.Status
  }

  export type parkingsCreateOrConnectWithoutParkingslotInput = {
    where: parkingsWhereUniqueInput
    create: XOR<parkingsCreateWithoutParkingslotInput, parkingsUncheckedCreateWithoutParkingslotInput>
  }

  export type parkingsCreateManyParkingslotInputEnvelope = {
    data: parkingsCreateManyParkingslotInput | parkingsCreateManyParkingslotInput[]
    skipDuplicates?: boolean
  }

  export type nonBooking_parkingCreateWithoutParkinglotInput = {
    startime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
  }

  export type nonBooking_parkingUncheckedCreateWithoutParkinglotInput = {
    id?: number
    startime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
  }

  export type nonBooking_parkingCreateOrConnectWithoutParkinglotInput = {
    where: nonBooking_parkingWhereUniqueInput
    create: XOR<nonBooking_parkingCreateWithoutParkinglotInput, nonBooking_parkingUncheckedCreateWithoutParkinglotInput>
  }

  export type nonBooking_parkingCreateManyParkinglotInputEnvelope = {
    data: nonBooking_parkingCreateManyParkinglotInput | nonBooking_parkingCreateManyParkinglotInput[]
    skipDuplicates?: boolean
  }

  export type merchantUpsertWithoutParkinglotInput = {
    update: XOR<merchantUpdateWithoutParkinglotInput, merchantUncheckedUpdateWithoutParkinglotInput>
    create: XOR<merchantCreateWithoutParkinglotInput, merchantUncheckedCreateWithoutParkinglotInput>
    where?: merchantWhereInput
  }

  export type merchantUpdateToOneWithWhereWithoutParkinglotInput = {
    where?: merchantWhereInput
    data: XOR<merchantUpdateWithoutParkinglotInput, merchantUncheckedUpdateWithoutParkinglotInput>
  }

  export type merchantUpdateWithoutParkinglotInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type merchantUncheckedUpdateWithoutParkinglotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type parkingsUpsertWithWhereUniqueWithoutParkingslotInput = {
    where: parkingsWhereUniqueInput
    update: XOR<parkingsUpdateWithoutParkingslotInput, parkingsUncheckedUpdateWithoutParkingslotInput>
    create: XOR<parkingsCreateWithoutParkingslotInput, parkingsUncheckedCreateWithoutParkingslotInput>
  }

  export type parkingsUpdateWithWhereUniqueWithoutParkingslotInput = {
    where: parkingsWhereUniqueInput
    data: XOR<parkingsUpdateWithoutParkingslotInput, parkingsUncheckedUpdateWithoutParkingslotInput>
  }

  export type parkingsUpdateManyWithWhereWithoutParkingslotInput = {
    where: parkingsScalarWhereInput
    data: XOR<parkingsUpdateManyMutationInput, parkingsUncheckedUpdateManyWithoutParkingslotInput>
  }

  export type nonBooking_parkingUpsertWithWhereUniqueWithoutParkinglotInput = {
    where: nonBooking_parkingWhereUniqueInput
    update: XOR<nonBooking_parkingUpdateWithoutParkinglotInput, nonBooking_parkingUncheckedUpdateWithoutParkinglotInput>
    create: XOR<nonBooking_parkingCreateWithoutParkinglotInput, nonBooking_parkingUncheckedCreateWithoutParkinglotInput>
  }

  export type nonBooking_parkingUpdateWithWhereUniqueWithoutParkinglotInput = {
    where: nonBooking_parkingWhereUniqueInput
    data: XOR<nonBooking_parkingUpdateWithoutParkinglotInput, nonBooking_parkingUncheckedUpdateWithoutParkinglotInput>
  }

  export type nonBooking_parkingUpdateManyWithWhereWithoutParkinglotInput = {
    where: nonBooking_parkingScalarWhereInput
    data: XOR<nonBooking_parkingUpdateManyMutationInput, nonBooking_parkingUncheckedUpdateManyWithoutParkinglotInput>
  }

  export type nonBooking_parkingScalarWhereInput = {
    AND?: nonBooking_parkingScalarWhereInput | nonBooking_parkingScalarWhereInput[]
    OR?: nonBooking_parkingScalarWhereInput[]
    NOT?: nonBooking_parkingScalarWhereInput | nonBooking_parkingScalarWhereInput[]
    id?: IntFilter<"nonBooking_parking"> | number
    startime?: DateTimeFilter<"nonBooking_parking"> | Date | string
    endtime?: DateTimeFilter<"nonBooking_parking"> | Date | string
    totaltime?: StringFilter<"nonBooking_parking"> | string
    parkinglslotid?: IntFilter<"nonBooking_parking"> | number
    carnumber?: StringFilter<"nonBooking_parking"> | string
  }

  export type cardetailsCreateManyUserInput = {
    id?: number
    Carnumber: string
    iselectric: boolean
    isparked?: boolean
  }

  export type parkingsCreateManyUserInput = {
    id?: number
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    parkingslotid: number
    carnumber: string
    status: $Enums.Status
  }

  export type notificationsCreateManyUserInput = {
    id?: number
    timestamp?: Date | string
    title: string
    From: string
    message: string
    readen?: boolean
    Notfifcationtype?: $Enums.NotificationType
  }

  export type cardetailsUpdateWithoutUserInput = {
    Carnumber?: StringFieldUpdateOperationsInput | string
    iselectric?: BoolFieldUpdateOperationsInput | boolean
    isparked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cardetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Carnumber?: StringFieldUpdateOperationsInput | string
    iselectric?: BoolFieldUpdateOperationsInput | boolean
    isparked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cardetailsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Carnumber?: StringFieldUpdateOperationsInput | string
    iselectric?: BoolFieldUpdateOperationsInput | boolean
    isparked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type parkingsUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    parkingslot?: parkinglotUpdateOneRequiredWithoutParkingsNestedInput
  }

  export type parkingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    parkingslotid?: IntFieldUpdateOperationsInput | number
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type parkingsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    parkingslotid?: IntFieldUpdateOperationsInput | number
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type notificationsUpdateWithoutUserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    readen?: BoolFieldUpdateOperationsInput | boolean
    Notfifcationtype?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type notificationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    readen?: BoolFieldUpdateOperationsInput | boolean
    Notfifcationtype?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type notificationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    readen?: BoolFieldUpdateOperationsInput | boolean
    Notfifcationtype?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type parkinglotCreateManyMerchantInput = {
    id?: number
    Name: string
    price: string
    Adress: string
    longitude: number
    latitude: number
    totalslots: number
    occupiedslots?: number
    vacantslots: number
    isempty?: boolean
  }

  export type parkinglotUpdateWithoutMerchantInput = {
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    parkings?: parkingsUpdateManyWithoutParkingslotNestedInput
    nonBooking_parking?: nonBooking_parkingUpdateManyWithoutParkinglotNestedInput
  }

  export type parkinglotUncheckedUpdateWithoutMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
    parkings?: parkingsUncheckedUpdateManyWithoutParkingslotNestedInput
    nonBooking_parking?: nonBooking_parkingUncheckedUpdateManyWithoutParkinglotNestedInput
  }

  export type parkinglotUncheckedUpdateManyWithoutMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    Adress?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    totalslots?: IntFieldUpdateOperationsInput | number
    occupiedslots?: IntFieldUpdateOperationsInput | number
    vacantslots?: IntFieldUpdateOperationsInput | number
    isempty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type parkingsCreateManyParkingslotInput = {
    id?: number
    userid: number
    date?: Date | string
    starttime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
    status: $Enums.Status
  }

  export type nonBooking_parkingCreateManyParkinglotInput = {
    id?: number
    startime?: Date | string
    endtime?: Date | string
    totaltime?: string
    carnumber: string
  }

  export type parkingsUpdateWithoutParkingslotInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutParkingNestedInput
  }

  export type parkingsUncheckedUpdateWithoutParkingslotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type parkingsUncheckedUpdateManyWithoutParkingslotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type nonBooking_parkingUpdateWithoutParkinglotInput = {
    startime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
  }

  export type nonBooking_parkingUncheckedUpdateWithoutParkinglotInput = {
    id?: IntFieldUpdateOperationsInput | number
    startime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
  }

  export type nonBooking_parkingUncheckedUpdateManyWithoutParkinglotInput = {
    id?: IntFieldUpdateOperationsInput | number
    startime?: DateTimeFieldUpdateOperationsInput | Date | string
    endtime?: DateTimeFieldUpdateOperationsInput | Date | string
    totaltime?: StringFieldUpdateOperationsInput | string
    carnumber?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}