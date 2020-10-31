type UserRole = 'client' | 'delivery' | 'operator' | 'admin' | 'merchant' | 'other';

export class User {
  constructor(
    private email: string,
    private password: string,
    private birthDate: Date,
    private firstName: string,
    private lastName: string,
    private country: Countries,
    private allowSuscription: boolean,
    private role?: UserRole,
    private state?: string,
    private zipCode?: string,
    private username?: string,
    private phone?: string,
    private age?: number,
    private _id?: string
  ) {
    this.setId();
    this.setUsername();
    this.setEmail(email);
    this.setPassword(password);
    this.setAge(birthDate);
    this.setName(firstName, lastName);
    this.setCountry(country);
    this.setSuscription(allowSuscription);
    this.setRole();
    this.setState();
    this.setZipCode();
    this.setPhone(phone);
  }

  // GETTERS //

  public getEmail = (): string => this.email;
  public getPassword = (): string => this.password;
  public getBirthDate = (): Date => this.birthDate;
  public getFirstName = (): string => this.firstName;
  public getLastName = (): string => this.lastName;
  public getCountry = (): Countries => this.country;
  public getAllowSuscription = (): boolean => this.allowSuscription;
  public getRole = (): UserRole => this.role || 'other';
  public getState = (): string => this.state || 'Empty';
  public getZipCode = (): string => this.zipCode || 'Empty';
  public getUsername = (): string => this.username || 'Empty';
  public getPhone = (): string => this.phone || 'Empty';
  public getAge = (): number => this.age || 0;
  public getId = (): string => this._id || 'Empty';

  // SETTERS //

  private setId = (): void => {
    this._id = String(new Date().valueOf());
  };

  private setEmail = (email: string): void => {
    if (/^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email');
    }
  };

  private setPassword = (password: string): void => {
    if (this.checkValidPassword(password)) {
      this.password = password;
    } else {
      throw new Error('Invalid password');
    }
  };

  private setAge = (birthDate: Date): void => {
    const age = birthDate.getFullYear() - new Date().getFullYear();

    if (age >= 13) {
      this.age = age;
      this.birthDate = birthDate;
    } else {
      throw new Error('User age must be greater than 13');
    }
  };

  private setName = (firstName: string, lastName: string): void => {
    if (this.checkValidName(firstName) && this.checkValidName(lastName)) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  };

  private setCountry = (country: Countries): void => {
    this.country = country;
  };

  private setSuscription = (allowSuscription: boolean = true): void => {
    this.allowSuscription = allowSuscription;
  };

  private setRole = (role: UserRole = 'client'): void => {
    this.role = role;
  };

  private setState = (state: string = 'default'): void => {
    this.state = state;
  };

  private setZipCode = (zipCode: string = 'default'): void => {
    this.zipCode = zipCode;
  };

  private setPhone = (phone: string = '0000-0000'): void => {
    if (/^(\d+-?)+\d+$/.test(phone)) {
      this.phone = phone;
    } else {
      throw new Error('Invalid phone');
    }
  };

  private setUsername = (): void => {
    this.zipCode = `${this.firstName}${this.lastName}${this._id ? this._id.slice(0, 4) : '123'}`;
  };

  // METHODS //

  public getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  };

  public checkValidName = (name: string): boolean => {
    if (name.length > 0 && /^[a-zA-Z]+$/.test(name)) {
      return true;
    } else {
      throw new Error('Invalid name format');
    }
  };

  public checkValidPassword = (password: string): boolean => {
    // ^ => password will start this way
    // (?=.*[a-z]) => must contain at least 1 lowercase alphabetical character
    // (?=.*[A-Z]) => must contain at least 1 uppercase alphabetical character
    // (?=.*[0-9]) => must contain at least 1 numeric character
    // (?=.[!@#\$%\^&]) => must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    // (?=.{8,}) => must be eight characters or longer

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
      return true;
    } else {
      throw new Error('Invalid password');
    }
  };
}

export enum Countries {
  Afghanistan = 'AF',
  AlandIslands = 'AX',
  Albania = 'AL',
  Algeria = 'DZ',
  AmericanSamoa = 'AS',
  Andorra = 'AD',
  Angola = 'AO',
  Anguilla = 'AI',
  Antarctica = 'AQ',
  AntiguaAndBarbuda = 'AG',
  Argentina = 'AR',
  Armenia = 'AM',
  Aruba = 'AW',
  Australia = 'AU',
  Austria = 'AT',
  Azerbaijan = 'AZ',
  Bahamas = 'BS',
  Bahrain = 'BH',
  Bangladesh = 'BD',
  Barbados = 'BB',
  Belarus = 'BY',
  Belgium = 'BE',
  Belize = 'BZ',
  Benin = 'BJ',
  Bermuda = 'BM',
  Bhutan = 'BT',
  Bolivia = 'BO',
  BosniaAndHerzegovina = 'BA',
  Botswana = 'BW',
  BouvetIsland = 'BV',
  Brazil = 'BR',
  BritishIndianOceanTerritory = 'IO',
  BruneiDarussalam = 'BN',
  Bulgaria = 'BG',
  BurkinaFaso = 'BF',
  Burundi = 'BI',
  Cambodia = 'KH',
  Cameroon = 'CM',
  Canada = 'CA',
  CapeVerde = 'CV',
  CaymanIslands = 'KY',
  CentralAfricanRepublic = 'CF',
  Chad = 'TD',
  Chile = 'CL',
  China = 'CN',
  ChristmasIsland = 'CX',
  CocosKeelingIslands = 'CC',
  Colombia = 'CO',
  Comoros = 'KM',
  Congo = 'CG',
  CongoDemocraticRepublic = 'CD',
  CookIslands = 'CK',
  CostaRica = 'CR',
  CoteDIvoire = 'CI',
  Croatia = 'HR',
  Cuba = 'CU',
  Cyprus = 'CY',
  CzechRepublic = 'CZ',
  Denmark = 'DK',
  Djibouti = 'DJ',
  Dominica = 'DM',
  DominicanRepublic = 'DO',
  Ecuador = 'EC',
  Egypt = 'EG',
  ElSalvador = 'SV',
  EquatorialGuinea = 'GQ',
  Eritrea = 'ER',
  Estonia = 'EE',
  Ethiopia = 'ET',
  FalklandIslands = 'FK',
  FaroeIslands = 'FO',
  Fiji = 'FJ',
  Finland = 'FI',
  France = 'FR',
  FrenchGuiana = 'GF',
  FrenchPolynesia = 'PF',
  FrenchSouthernTerritories = 'TF',
  Gabon = 'GA',
  Gambia = 'GM',
  Georgia = 'GE',
  Germany = 'DE',
  Ghana = 'GH',
  Gibraltar = 'GI',
  Greece = 'GR',
  Greenland = 'GL',
  Grenada = 'GD',
  Guadeloupe = 'GP',
  Guam = 'GU',
  Guatemala = 'GT',
  Guernsey = 'GG',
  Guinea = 'GN',
  GuineaBissau = 'GW',
  Guyana = 'GY',
  Haiti = 'HT',
  HeardIslandMcdonaldIslands = 'HM',
  HolySeeVaticanCityState = 'VA',
  Honduras = 'HN',
  HongKong = 'HK',
  Hungary = 'HU',
  Iceland = 'IS',
  India = 'IN',
  Indonesia = 'ID',
  Iran = 'IR',
  Iraq = 'IQ',
  Ireland = 'IE',
  IsleOfMan = 'IM',
  Israel = 'IL',
  Italy = 'IT',
  Jamaica = 'JM',
  Japan = 'JP',
  Jersey = 'JE',
  Jordan = 'JO',
  Kazakhstan = 'KZ',
  Kenya = 'KE',
  Kiribati = 'KI',
  Korea = 'KR',
  Kuwait = 'KW',
  Kyrgyzstan = 'KG',
  LaoPeoplesDemocraticRepublic = 'LA',
  Latvia = 'LV',
  Lebanon = 'LB',
  Lesotho = 'LS',
  Liberia = 'LR',
  LibyanArabJamahiriya = 'LY',
  Liechtenstein = 'LI',
  Lithuania = 'LT',
  Luxembourg = 'LU',
  Macao = 'MO',
  Macedonia = 'MK',
  Madagascar = 'MG',
  Malawi = 'MW',
  Malaysia = 'MY',
  Maldives = 'MV',
  Mali = 'ML',
  Malta = 'MT',
  MarshallIslands = 'MH',
  Martinique = 'MQ',
  Mauritania = 'MR',
  Mauritius = 'MU',
  Mayotte = 'YT',
  Mexico = 'MX',
  Micronesia = 'FM',
  Moldova = 'MD',
  Monaco = 'MC',
  Mongolia = 'MN',
  Montenegro = 'ME',
  Montserrat = 'MS',
  Morocco = 'MA',
  Mozambique = 'MZ',
  Myanmar = 'MM',
  Namibia = 'NA',
  Nauru = 'NR',
  Nepal = 'NP',
  Netherlands = 'NL',
  NetherlandsAntilles = 'AN',
  NewCaledonia = 'NC',
  NewZealand = 'NZ',
  Nicaragua = 'NI',
  Niger = 'NE',
  Nigeria = 'NG',
  Niue = 'NU',
  NorfolkIsland = 'NF',
  NorthernMarianaIslands = 'MP',
  Norway = 'NO',
  Oman = 'OM',
  Pakistan = 'PK',
  Palau = 'PW',
  PalestinianTerritory = 'PS',
  Panama = 'PA',
  PapuaNewGuinea = 'PG',
  Paraguay = 'PY',
  Peru = 'PE',
  Philippines = 'PH',
  Pitcairn = 'PN',
  Poland = 'PL',
  Portugal = 'PT',
  PuertoRico = 'PR',
  Qatar = 'QA',
  Reunion = 'RE',
  Romania = 'RO',
  RussianFederation = 'RU',
  Rwanda = 'RW',
  SaintBarthelemy = 'BL',
  SaintHelena = 'SH',
  SaintKittsAndNevis = 'KN',
  SaintLucia = 'LC',
  SaintMartin = 'MF',
  SaintPierreAndMiquelon = 'PM',
  SaintVincentAndGrenadines = 'VC',
  Samoa = 'WS',
  SanMarino = 'SM',
  SaoTomeAndPrincipe = 'ST',
  SaudiArabia = 'SA',
  Senegal = 'SN',
  Serbia = 'RS',
  Seychelles = 'SC',
  SierraLeone = 'SL',
  Singapore = 'SG',
  Slovakia = 'SK',
  Slovenia = 'SI',
  SolomonIslands = 'SB',
  Somalia = 'SO',
  SouthAfrica = 'ZA',
  SouthGeorgiaAndSandwichIsl = 'GS',
  Spain = 'ES',
  SriLanka = 'LK',
  Sudan = 'SD',
  Suriname = 'SR',
  SvalbardAndJanMayen = 'SJ',
  Swaziland = 'SZ',
  Sweden = 'SE',
  Switzerland = 'CH',
  SyrianArabRepublic = 'SY',
  Taiwan = 'TW',
  Tajikistan = 'TJ',
  Tanzania = 'TZ',
  Thailand = 'TH',
  TimorLeste = 'TL',
  Togo = 'TG',
  Tokelau = 'TK',
  Tonga = 'TO',
  TrinidadAndTobago = 'TT',
  Tunisia = 'TN',
  Turkey = 'TR',
  Turkmenistan = 'TM',
  TurksAndCaicosIslands = 'TC',
  Tuvalu = 'TV',
  Uganda = 'UG',
  Ukraine = 'UA',
  UnitedArabEmirates = 'AE',
  UnitedKingdom = 'GB',
  UnitedStates = 'US',
  UnitedStatesOutlyingIslands = 'UM',
  Uruguay = 'UY',
  Uzbekistan = 'UZ',
  Vanuatu = 'VU',
  Venezuela = 'VE',
  VietNam = 'VN',
  VirginIslandsBritish = 'VG',
  VirginIslandsUS = 'VI',
  WallisAndFutuna = 'WF',
  WesternSahara = 'EH',
  Yemen = 'YE',
  Zambia = 'ZM',
  Zimbabw = 'ZW'
}
